import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export default function SubmitButton({ label = "Submit" }) {
  const { isValid, dirty } = useFormikContext();

  return (
    <Button
      disabled={!isValid || !dirty}
      color="primary"
      variant="contained"
      type="submit"
    >
      {label}
    </Button>
  );
}
