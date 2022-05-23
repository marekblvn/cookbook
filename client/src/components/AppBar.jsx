import FilterAlt from "@mui/icons-material/FilterAlt";
import Add from "@mui/icons-material/Add";
import Construction from "@mui/icons-material/Construction";
import { Badge, Button } from "@mui/material";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

export default function AppBar({
  onSearch,
  onCreateRecipe,
  onOpenFilters,
  filtersLength,
}) {
  return (
    <>
      <Badge badgeContent={filtersLength} color="primary">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<FilterAlt />}
          onClick={onOpenFilters}
        >
          Add filters
        </Button>
      </Badge>
      <SearchBox placeholder={"Search"} onChangeHandler={onSearch} />
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<Add />}
        onClick={onCreateRecipe}
      >
        Create recipe
      </Button>
      <Link to="/ingredients" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Construction />}
        >
          Manage ingredients
        </Button>
      </Link>
    </>
  );
}
