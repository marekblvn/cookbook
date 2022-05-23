import { FieldArray, useFormikContext } from "formik";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "./Select";
import TextField from "./TextField";

export default function IngredientPicker({
  name,
  label,
  ingredients,
  ...rest
}) {
  const { values } = useFormikContext();

  return (
    <FieldArray
      id={name}
      name={name}
      label={label}
      {...rest}
      render={(arrayHelpers) => (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {values[name].map((ingredient, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
                key={index}
              >
                <Select
                  name={`${name}[${index}].ingredient`}
                  label="Ingredient"
                  items={ingredients}
                />
                <TextField
                  name={`${name}.${index}.amount`}
                  label="Amount"
                  type="number"
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={() => arrayHelpers.push({ ingredient: ``, amount: "" })}
          >
            Add ingredient
          </Button>
        </>
      )}
    />
  );
}
