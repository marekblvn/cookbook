import { TextField } from "@mui/material";

const SearchBox = ({ placeholder, onChangeHandler, ...props }) => {
  return (
    <TextField
      focused
      size="small"
      label={placeholder}
      type="search"
      inputProps={{ style: { color: "gold" } }}
      onChange={onChangeHandler}
      {...props}
    ></TextField>
  );
};

export default SearchBox;
