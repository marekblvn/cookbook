const Error = require("../error/ingredient-error");
const validateResource = require("../utils/validateResources");
const {
  addIngredientSchema,
  editIngredientSchema,
  deleteIngredientSchema,
} = require("../validation/ingredient-validation");
const {
  addIngredient,
  editIngredient,
  deleteIngredient,
  findAllIngredients,
} = require("../dao/ingredient-dao");
const { findAllRecipesByIngredientId } = require("../dao/recipe-dao");

const addIngredientAbl = async (req, res) => {
  // data validation
  validateResource(
    { body: req.body },
    addIngredientSchema,
    Error.Add.InvalidDtoIn
  );

  // saving ingredient
  let dtoOut;
  try {
    dtoOut = await addIngredient(req.body);
  } catch (e) {
    throw new Error.Add.CreateDaoFailed(e);
  }

  // returning dtoOut
  res.send(dtoOut);
};

const editIngredientAbl = async (req, res) => {
  // data validation
  validateResource(
    { body: req.body },
    editIngredientSchema,
    Error.Edit.InvalidDtoIn
  );

  // saving edited ingredient
  let ingredient;
  try {
    ingredient = await editIngredient(req.body);
  } catch (e) {
    throw new Error.Edit.UpdateDaoFailed(e);
  }

  // checking ingredient existed
  if (!ingredient) {
    throw new Error.Edit.IngredientDoesNotExist();
  }

  // returning dtoOut
  const dtoOut = { ...ingredient.toObject() };
  res.send(dtoOut);
};

const deleteIngredientAbl = async (req, res) => {
  // data val
  validateResource(
    {
      body: req.body,
    },
    deleteIngredientSchema,
    Error.Delete.InvalidDtoIn
  );

  // check references in recipes
  let recipes;
  try {
    recipes = await findAllRecipesByIngredientId(req.body._id);
  } catch (error) {
    throw new Error.Delete.FindAllRecipesByIdDaoFailed(error);
  }

  if (recipes.length) {
    throw new Error.Delete.IngredientReferencedInRecipes();
  }

  // delete ingredient
  let ingredient;
  try {
    ingredient = await deleteIngredient(req.body._id);
  } catch (error) {
    throw new Error.Delete.DeleteDaoFailed(error);
  }

  // check ingredient existed
  if (!ingredient) {
    throw new Error.Delete.IngredientDoesNotExist();
  }

  // return dtoOut
  const dtoOut = { ...ingredient.toObject() };
  res.send(dtoOut);
};

const listIngredientsAbl = async (req, res) => {
  const ingredients = await findAllIngredients();
  res.send(ingredients);
};

module.exports = {
  addIngredientAbl,
  editIngredientAbl,
  deleteIngredientAbl,
  listIngredientsAbl,
};
