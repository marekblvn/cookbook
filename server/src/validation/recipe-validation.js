const { object, string, array, number } = require("zod");
const zod_objectId = require("../utils/zod_objectId");

const addRecipeSchema = object({
  body: object({
    name: string().min(1),
    description: string().min(1),
    ingredients: array(
      object({
        ingredient: zod_objectId(),
        amount: number().min(1),
      })
    ),
    preparationLength: number().min(1),
  }),
});

const deleteRecipeSchema = object({
  body: object({
    _id: zod_objectId(),
  }),
});

const editRecipeSchema = object({
  body: object({
    _id: zod_objectId(),
    name: string().min(1),
    description: string().min(1),
    ingredients: array(
      object({
        ingredient: zod_objectId(),
        amount: number().min(1),
      })
    ),
    preparationLength: number().min(1),
  }),
});

const getRecipeSchema = object({
  params: object({
    _id: zod_objectId(),
  }),
});

module.exports = {
  addRecipeSchema,
  deleteRecipeSchema,
  editRecipeSchema,
  getRecipeSchema,
};
