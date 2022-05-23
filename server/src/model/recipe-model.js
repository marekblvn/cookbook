const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [
      {
        ingredient: {
          type: mongoose.Types.ObjectId,
          ref: "ingredient",
          required: true,
        },
        amount: { type: Number, required: true },
      },
    ],
    preparationLength: { type: Number, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("recipe", schema);

module.exports = Recipe;
