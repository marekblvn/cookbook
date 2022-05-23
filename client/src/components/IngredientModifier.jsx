import IngredientForm from "./IngredientForm";
import Modal from "./Modal";
import useSend from "../hooks/useSend";
import { useSnackbar } from "notistack";
import { ingredientAdd, ingredientEdit } from "../services/ingredient.service";
import { addIngredient, editIngredient } from "../validation/ingredient";
import { Add, Edit } from "../errors/ingredient.error";
import Loading from "./Loading";

export default function IngredientModifier({ ingredient, onClose }) {
  const { enqueueSnackbar } = useSnackbar();
  const ingredientAddReq = useSend(ingredientAdd, [Add.invalidDtoIn]);
  const ingredientEditReq = useSend(ingredientEdit, [
    Edit.invalidDtoIn,
    Edit.ingredientDoesNotExist,
  ]);
  if (!ingredient) return null;

  const handleSubmit = async (values) => {
    values._id
      ? await ingredientEditReq.send(
          [values],
          () => {
            onClose(true);
            enqueueSnackbar(`${values.name} successfully edited.`, {
              variant: "success",
            });
          },
          (err) => enqueueSnackbar(err.message, { variant: "error" })
        )
      : await ingredientAddReq.send(
          [values],
          () => {
            onClose(true);
            enqueueSnackbar(`Successfully added new ingredient.`, {
              variant: "success",
            });
          },
          (err) => enqueueSnackbar(err.message, { variant: "error" })
        );
  };

  let initialValues = { name: "", unit: "" };
  let validationSchema = addIngredient;

  if (ingredient._id) {
    initialValues = ingredient;
    validationSchema = editIngredient;
  }

  return (
    <Modal open onClose={() => onClose(false)}>
      {(ingredientAddReq.loading || ingredientEditReq.loading) && <Loading />}
      <IngredientForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}
