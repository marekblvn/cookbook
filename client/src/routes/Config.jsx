import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import RecipeDetail from "./RecipeDetail";
import Ingredients from "./Ingredients";
import NotFound from "./NotFound";

export default function Config() {
  return (
    <Routes>
      <Route index element={<Root />} />
      <Route path=":recipeId" element={<RecipeDetail />} />
      <Route path="ingredients" element={<Ingredients />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
