const Error = require("../error/recipe-error");
const validateResource = require("../utils/validateResources");
const {
  addRecipeSchema,
  deleteRecipeSchema,
  editRecipeSchema,
  getRecipeSchema,
} = require("../validation/recipe-validation");
const {
  addRecipe,
  editRecipe,
  deleteRecipe,
  findRecipeById,
  findAllRecipes,
} = require("../dao/recipe-dao");
const { findAllIngredientsByIds } = require("../dao/ingredient-dao");

const _ = require("lodash");

const addRecipeAbl = async (req, res) => {
  // data validation
  validateResource({ body: req.body }, addRecipeSchema, Error.Add.InvalidDtoIn);

  // ingrediece uniq check
  const ingredients = req.body.ingredients;
  const uniqIngredients = _.uniqBy(ingredients, "ingredient");

  if (ingredients.length !== uniqIngredients.length) {
    throw new Error.Add.IngredientsAreNotUnique(ingredients);
  }

  // ingredience existance check
  const ingredientIdsInReq = req.body.ingredients.map((i) => i.ingredient);
  const ingredientsFromReqInDb = await findAllIngredientsByIds(
    ingredientIdsInReq
  );

  if (ingredientIdsInReq.length !== ingredientsFromReqInDb.length) {
    throw new Error.Add.IngredientDoesNotExist(
      JSON.stringify({
        ingredientIdsInReq,
        ingredientsFromReqInDb,
      })
    );
  }

  // saving recipe
  let dtoOut;
  try {
    dtoOut = await addRecipe(req.body);
  } catch (e) {
    throw new Error.Add.CreateDaoFailed(e);
  }

  // returning dtoOut
  res.send(dtoOut);
};

const deleteRecipeAbl = async (req, res) => {
  // data validation
  validateResource(
    { body: req.body },
    deleteRecipeSchema,
    Error.Delete.InvalidDtoIn
  );
  // deleting recipe
  let recipe;
  try {
    recipe = await deleteRecipe(req.body._id);
  } catch (e) {
    throw new Error.Delete.DeleteDaoFailed(e);
  }

  if (!recipe) {
    throw new Error.Delete.RecipeDoesNotExist();
  }
  // returning dtoOut
  const dtoOut = { ...recipe.toObject() };
  res.send(dtoOut);
};

const editRecipeAbl = async (req, res) => {
  // data validation
  validateResource(
    { body: req.body },
    editRecipeSchema,
    Error.Edit.InvalidDtoIn
  );

  // ingrediece uniq check
  const ingredients = req.body.ingredients;
  const uniqIngredients = _.uniqBy(ingredients, "ingredient");

  if (ingredients.length !== uniqIngredients.length) {
    throw new Error.Edit.IngredientsAreNotUnique(ingredients);
  }

  // ingredients existence check
  const ingredientIdsInReq = req.body.ingredients.map((i) => i.ingredient);
  const ingredientsFromReqInDb = await findAllIngredientsByIds(
    ingredientIdsInReq
  );

  if (ingredientIdsInReq.length !== ingredientsFromReqInDb.length) {
    throw new Error.Edit.IngredientDoesNotExist(
      JSON.stringify({
        ingredientIdsInReq,
        ingredientsFromReqInDb,
      })
    );
  }

  // saving recipe
  let dtoOut;
  try {
    dtoOut = await editRecipe(req.body);
  } catch (e) {
    throw new Error.Edit.UpdateDaoFailed(e);
  }

  if (!dtoOut) throw new Error.Edit.RecipeDoesNotExist();

  // returning dtoOut
  res.send(dtoOut);
};

// get recipe by id
const getRecipeAbl = async (req, res) => {
  const id = req.params._id;
  // data validation
  validateResource(
    { params: req.params },
    getRecipeSchema,
    Error.Get.InvalidDtoIn
  );

  // getting recipe
  const recipe = await findRecipeById(id);

  if (!recipe) {
    throw new Error.Get.RecipeDoesNotExist(id);
  }

  // returning dtoOut
  res.send(recipe);
};

// get all recipe list
const listRecipesAbl = async (req, res) => {
  const recipes = await findAllRecipes();
  res.send(recipes);
};

module.exports = {
  addRecipeAbl,
  deleteRecipeAbl,
  editRecipeAbl,
  getRecipeAbl,
  listRecipesAbl,
};
