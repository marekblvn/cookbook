import { useState } from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Button, Container, Grid, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IngredientModifier from "../components/IngredientModifier";
import IngredientTable from "../components/IngredientTable";
import DeleteModal from "../components/DeleteModal";
import ErrorMessage from "../components/ErrorMessage";
import SearchBox from "../components/SearchBox";
import Loading from "../components/Loading";

import useLoad from "../hooks/useLoad";
import useSend from "../hooks/useSend";

import {
  ingredientDelete,
  ingredientList,
} from "../services/ingredient.service";
import { Delete } from "../errors/ingredient.error";

export default function Ingredients() {
  const { data: ingredients, loading, error, reload } = useLoad(ingredientList);
  const [searchQuery, setSearchQuery] = useState("");
  const [chosenIngredient, setChosenIngredient] = useState(null);
  const [ingredToDelete, setIngredToDelete] = useState(null);
  const ingredientDeleteReq = useSend(ingredientDelete, [
    Delete.invalidDtoIn,
    Delete.ingredientDoesNotExist,
    Delete.ingredientReferencedInRecipes,
  ]);
  const { enqueueSnackbar } = useSnackbar();

  const handleSearch = (event) => setSearchQuery(event.target.value);

  const handleDeleteClick = (ingredient) => {
    setIngredToDelete(ingredient);
  };

  const handleDelete = async (ingredient) => {
    const successCb = async () => {
      enqueueSnackbar(`${ingredient.name} deleted successfully.`, {
        variant: "success",
      });
      await reload();
    };

    await ingredientDeleteReq.send(
      [{ _id: ingredient._id }],
      successCb,
      (err) => enqueueSnackbar(err.message, { variant: "error" })
    );
    setIngredToDelete(null);
  };

  const handleAddIngredient = () => setChosenIngredient({});

  const handleEditIngredient = (recipe) => {
    const ingredientForForm = {
      _id: recipe._id,
      name: recipe.name,
      unit: recipe.unit,
    };

    setChosenIngredient(ingredientForForm);
  };

  const ingredientModalClose = async (doReload) => {
    setChosenIngredient(null);

    if (doReload) await reload();
  };

  const ingredientsFiltered = (ingredients || []).filter((i) => {
    return i.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (error) return <ErrorMessage message={error?.message} />;

  return (
    <>
      <IngredientModifier
        ingredient={chosenIngredient}
        onClose={ingredientModalClose}
      />
      <DeleteModal
        item={ingredToDelete}
        onYes={handleDelete}
        onClose={() => setIngredToDelete(null)}
      />
      <Container maxWidth={"md"} sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item container md={12} justifyContent="center" spacing={2}>
            <Grid item md={"auto"}>
              <Link to="/">
                <IconButton
                  color="primary"
                  style={{ transform: "rotateY(3.142rad)" }}
                >
                  <ExitToAppIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item md>
              <SearchBox
                placeholder={"Search"}
                onChangeHandler={handleSearch}
                fullWidth
              />
            </Grid>
            <Grid item md={"auto"}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddIngredient}
              >
                Add ingredient
              </Button>
            </Grid>
          </Grid>
          <Grid item md={12}>
            {loading ? (
              <Loading />
            ) : (
              <IngredientTable
                ingredients={ingredientsFiltered}
                onEdit={handleEditIngredient}
                onDelete={handleDeleteClick}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
