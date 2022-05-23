import { Box } from "@mui/material";

import Form from "./forms/Form";
import IngredientPicker from "./forms/IngredientPicker";
import SubmitButton from "./forms/SubmitButton";
import TextField from "./forms/TextField";

export default function RecipeForm({
  initialValues,
  validationSchema,
  onSubmit,
  ingredients,
}) {
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <TextField label="Name" name="name" />
        <TextField label="Description" name="description" multiline rows={10} />
        <TextField
          label="Preparation lenght"
          name="preparationLength"
          type="number"
        />
        <IngredientPicker
          label="Ingredients"
          name="ingredients"
          ingredients={ingredients}
        />
        <SubmitButton />
      </Box>
    </Form>
  );
}
