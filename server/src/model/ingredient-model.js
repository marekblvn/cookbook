const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
});

const Ingredient = mongoose.model("ingredient", schema);

module.exports = Ingredient;
