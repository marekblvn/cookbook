import { Box } from "@mui/material";
import Form from "./forms/Form";
import TextField from "./forms/TextField";
import SubmitButton from "./forms/SubmitButton";

export default function IngredientForm({
  initialValues,
  validationSchema,
  onSubmit,
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
        <TextField label="Unit" name="unit" />
        <SubmitButton />
      </Box>
    </Form>
  );
}
