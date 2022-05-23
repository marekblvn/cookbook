import { TextField as MuiTextField } from "@mui/material";
import { useFormikContext } from "formik";
import _ from "lodash";

export default function TextField({ name, label, ...otherTextFieldProps }) {
  const { values, touched, errors, handleChange } = useFormikContext();

  const value = _.get(values, name);
  const touch = _.get(touched, name);
  const error = _.get(errors, name);

  return (
    <MuiTextField
      fullWidth
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={handleChange}
      error={touch && Boolean(error)}
      helperText={touch && error}
      {...otherTextFieldProps}
    />
  );
}
