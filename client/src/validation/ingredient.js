import * as Yup from "yup";

export const addIngredient = Yup.object({
  name: Yup.string().required(),
  unit: Yup.string().min(1).required(),
});

export const editIngredient = Yup.object({
  _id: Yup.string().required(),
  name: Yup.string().required(),
  unit: Yup.string().min(1).required(),
});
