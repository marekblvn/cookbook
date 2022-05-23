const IngredientModel = require("../model/ingredient-model");

const findAllIngredients = () => IngredientModel.find();

const findAllIngredientsByIds = (ids) =>
  IngredientModel.find({ _id: { $in: ids } });

const findIngredientById = (id) => IngredientModel.findById(id);

const addIngredient = (ingredient) => IngredientModel.create(ingredient);

const editIngredient = (newIngredient) =>
  IngredientModel.findByIdAndUpdate(newIngredient._id, newIngredient, {
    new: true,
  });

const deleteIngredient = (id) => IngredientModel.findByIdAndDelete(id);

module.exports = {
  findAllIngredients,
  findAllIngredientsByIds,
  findIngredientById,
  addIngredient,
  editIngredient,
  deleteIngredient,
};
