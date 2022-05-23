import { Autocomplete } from "@mui/material";
import { useFormikContext } from "formik";
import TextField from "./TextField";
import _ from "lodash";

export default function Select({ name, label, items, ...rest }) {
  const { values, touched, errors, setFieldValue } = useFormikContext();

  const value = _.get(values, name);
  const touch = _.get(touched, name);
  const error = _.get(errors, name);

  const myHandleChange = (e, v) => setFieldValue(name, v._id);

  return (
    <Autocomplete
      fullWidth
      id={name}
      disableClearable
      options={items}
      getOptionLabel={(option) => {
        if (!option) return ""; // háže warning že není jako options, ale jinej fix jsem nenašel...

        if (typeof option === "string") {
          const recipeFound = items.find((o) => o._id === option);
          if (recipeFound) return recipeFound.name;
          else return option;
        }
        if (option) return option.name;
      }}
      value={value}
      onChange={myHandleChange}
      isOptionEqualToValue={(option, value) => option._id === value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={touch && Boolean(error)}
          helperText={touch && error}
          {...rest}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
