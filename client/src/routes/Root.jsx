import { useState } from "react";
import { useSnackbar } from "notistack";
import RecipeList from "../components/RecipeList";
import Thumbnail from "../components/Thumbnail";
import AppBar from "../components/AppBar";
import RecipeModifier from "../components/RecipeModifier";
import DeleteModal from "../components/DeleteModal";
import FilterModifier from "../components/FilterModifier";
import Loading from "../components/Loading";

import useLoad from "../hooks/useLoad";
import useSend from "../hooks/useSend";
import { recipeDelete, recipeList } from "../services/recipe.service";
import { ingredientList } from "../services/ingredient.service";

export default function Root() {
  const {
    data: recipes,
    loading: recipeLoading,
    error: recipeError,
    reload,
  } = useLoad(recipeList);
  const {
    data: ingredients,
    loading: ingredientLoading,
    error: ingredientError,
  } = useLoad(ingredientList);
  const recipeDeleteReq = useSend(recipeDelete);
  const [searchQuery, setSearchQuery] = useState("");
  const [chosenRecipe, setChosenRecipe] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleCreateRecipe = () => setChosenRecipe({});

  const handleEditRecipe = (recipe) => {
    const recipeForForm = {
      _id: recipe._id,
      name: recipe.name,
      description: recipe.description,
      preparationLength: recipe.preparationLength,
      ingredients: recipe.ingredients.map((i) => ({
        amount: i.amount,
        ingredient: i.ingredient._id,
      })),
    };

    setChosenRecipe(recipeForForm);
  };

  const handleRecipeModal = (recipe) => setRecipeToDelete(recipe);

  const handleRecipeDelete = (recipe) => {
    const successCb = async () => {
      enqueueSnackbar(`${recipe.name} successfully deleted.`, {
        variant: "success",
      });
      setRecipeToDelete(null);
      await reload();
    };

    recipeDeleteReq.send([recipe], successCb, (err) =>
      enqueueSnackbar(err.message, { variant: "error" })
    );
  };

  const handleFiltersToggle = () => {
    filterModalOpen ? setFilterModalOpen(false) : setFilterModalOpen(true);
  };

  const handleFilterStateChange = (event) => {
    event.target.checked
      ? setFilters([...filters, event.target.name])
      : setFilters(filters.filter((i) => i !== event.target.name));
  };

  const handleResetFilters = () => setFilters([]);

  const recipeModalClose = async (doReload) => {
    setChosenRecipe(null);

    if (doReload) await reload();
  };

  const hasDesiredIngredients = (recipe) => {
    if (!filters.length) return true;
    return filters.every((item) =>
      recipe.ingredients.map((ing) => ing.ingredient._id).includes(item)
    );
  };

  const recipeSearchFiltered = (recipes || [])
    .filter(hasDesiredIngredients)
    .filter((recipe) => {
      if (!searchQuery) return true;

      return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <>
      <DeleteModal
        item={recipeToDelete}
        onClose={() => setRecipeToDelete(null)}
        onYes={handleRecipeDelete}
      />
      <FilterModifier
        isOpen={filterModalOpen}
        onClose={handleFiltersToggle}
        onResetFilters={handleResetFilters}
        onFilterStateChange={handleFilterStateChange}
        activeFilters={filters}
        data={ingredients}
        loading={ingredientLoading}
        error={ingredientError}
      />
      <RecipeModifier
        recipe={chosenRecipe}
        onClose={recipeModalClose}
        data={ingredients}
        error={ingredientError}
      />
      <Thumbnail>
        <AppBar
          onSearch={handleSearch}
          onCreateRecipe={handleCreateRecipe}
          onOpenFilters={handleFiltersToggle}
          filtersLength={filters.length}
        />
      </Thumbnail>
      {recipeDeleteReq.loading ? (
        <Loading />
      ) : (
        <RecipeList
          loading={recipeLoading}
          error={recipeError}
          recipes={recipeSearchFiltered}
          onDelete={handleRecipeModal}
          onEdit={handleEditRecipe}
        />
      )}
    </>
  );
}
