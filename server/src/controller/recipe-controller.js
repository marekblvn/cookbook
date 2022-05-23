const express = require("express");
const router = express.Router();

const {
  addRecipeAbl,
  deleteRecipeAbl,
  editRecipeAbl,
  getRecipeAbl,
  listRecipesAbl,
} = require("../abl/recipe-abl");

router.get("/get/:_id", getRecipeAbl);
router.get("/list", listRecipesAbl);

router.post("/add", addRecipeAbl);
router.post("/delete", deleteRecipeAbl);
router.post("/edit", editRecipeAbl);

module.exports = router;
