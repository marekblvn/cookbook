const RecipeModel = require("../model/recipe-model");
const IngredientModel = require("../model/ingredient-model");

const findAllRecipes = () =>
  RecipeModel.find()
    .populate({
      path: "ingredients.ingredient",
      model: IngredientModel,
    })
    .select("-ingredients._id");

const findAllRecipesByIngredientId = (ingredientId) =>
  RecipeModel.find({ "ingredients.ingredient": ingredientId });

const findRecipeById = (id) =>
  RecipeModel.findById(id)
    .populate({
      path: "ingredients.ingredient",
      model: IngredientModel,
    })
    .select("-ingredients._id");

const addRecipe = (recipe) => RecipeModel.create(recipe);

const editRecipe = (newRecipe) =>
  RecipeModel.findByIdAndUpdate(newRecipe._id, newRecipe, {
    new: true,
  });

const deleteRecipe = (id) => RecipeModel.findByIdAndDelete(id);

module.exports = {
  findAllRecipes,
  findAllRecipesByIngredientId,
  findRecipeById,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
