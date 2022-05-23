import * as Yup from "yup";

export const addRecipe = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string().required(),
        amount: Yup.number().min(1).required(),
      })
    )
    .min(1)
    .required(),
  preparationLength: Yup.number().min(1).required(),
});

export const editRecipe = Yup.object({
  _id: Yup.string().required(),
  name: Yup.string().required(),
  description: Yup.string().required(),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string().required(),
        amount: Yup.number().min(1).required(),
      })
    )
    .min(1)
    .required(),
  preparationLength: Yup.number().min(1).required(),
});
