import { Container, Grid } from "@mui/material";
import RecipeCard from "./recipeCard/RecipeCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import NoRecipe from "./NoRecipe";

function RecipeList({ recipes, loading, error, onEdit, onDelete }) {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;
  if (recipes.length === 0) return <NoRecipe />;

  return (
    <>
      <Container sx={{ mt: 2, mb: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recipes.map((recipe, index) => (
            <Grid item xs={3} key={index}>
              <RecipeCard recipe={recipe} onDelete={onDelete} onEdit={onEdit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default RecipeList;
