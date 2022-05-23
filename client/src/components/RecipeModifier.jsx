import { addRecipe, editRecipe } from "../validation/recipe";
import { useSnackbar } from "notistack";
import RecipeForm from "./RecipeForm";
import Modal from "./Modal";
import Loading from "./Loading";

import useSend from "../hooks/useSend";
import { recipeAdd, recipeEdit } from "../services/recipe.service";
import { Add, Edit } from "../errors/recipe.error";

export default function RecipeModifier({ recipe, onClose, data, error }) {
  const recipeAddReq = useSend(recipeAdd, [
    Add.invalidDtoIn,
    Add.ingredientDoesNotExist,
    Add.ingredientsAreNotUnique,
  ]);
  const recipeEditReq = useSend(recipeEdit, [
    Edit.invalidDtoIn,
    Edit.recipeDoesNotExist,
    Edit.ingredientDoesNotExist,
    Edit.ingredientsAreNotUnique,
  ]);
  const { enqueueSnackbar } = useSnackbar();

  if (error) return null;
  if (!recipe) return null;

  const handleSubmit = async (values) => {
    if (values._id)
      await recipeEditReq.send(
        [values],
        () => {
          onClose(true);
          enqueueSnackbar(`${values.name} successfully edited.`, {
            variant: "success",
          });
        },
        (err) => enqueueSnackbar(err.message, { variant: "error" })
      );
    else
      await recipeAddReq.send(
        [values],
        () => {
          onClose(true);
          enqueueSnackbar(`Successfully added new recipe.`, {
            variant: "success",
          });
        },
        (err) =>
          enqueueSnackbar(err.message || "Something failed", {
            variant: "error",
          })
      );
  };

  let initialValues = {
    name: "",
    description: "",
    ingredients: [],
    preparationLength: "",
  };
  let validationSchema = addRecipe;

  if (recipe._id) {
    initialValues = recipe;
    validationSchema = editRecipe;
  }

  return (
    <Modal open onClose={() => onClose(false)}>
      {(recipeAddReq.loading || recipeEditReq.loading) && <Loading />}
      {/*TODO: Add loading component*/}
      <RecipeForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        ingredients={data}
      />
    </Modal>
  );
}
