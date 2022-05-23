const express = require("express");
const router = express.Router();

const {
  addIngredientAbl,
  editIngredientAbl,
  deleteIngredientAbl,
  listIngredientsAbl,
} = require("../abl/ingredient-abl");

router.get("/list", listIngredientsAbl);
router.post("/add", addIngredientAbl);
router.post("/edit", editIngredientAbl);
router.post("/delete", deleteIngredientAbl);

module.exports = router;
