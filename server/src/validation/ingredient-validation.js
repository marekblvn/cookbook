const { object, string } = require("zod");
const zod_objectId = require("../utils/zod_objectId");

const addIngredientSchema = object({
  body: object({
    name: string().min(1),
    unit: string().min(1),
  }),
});

const editIngredientSchema = object({
  body: object({
    _id: zod_objectId(),
    name: string().min(1),
    unit: string().min(1),
  }),
});

const deleteIngredientSchema = object({
  body: object({
    _id: zod_objectId(),
  }),
});

module.exports = {
  addIngredientSchema,
  editIngredientSchema,
  deleteIngredientSchema,
};
