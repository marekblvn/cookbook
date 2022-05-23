import { Typography, Card } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./recipeCard.css";

function RecipeCard({ recipe, onEdit, onDelete }) {
  const { _id, name, ingredients } = recipe;
  const ingredientsText = getIngredientsText(ingredients);

  return (
    <Card
      className="card"
      sx={{
        padding: (theme) => theme.spacing(1, 2),
        "&:hover": {
          transform: "scale(1.1)",
          transition: ".5s",
        },
      }}
    >
      <div style={{ display: "flex", justifyContent: "right" }}>
        <IconButton onClick={() => onEdit(recipe)}>
          <CreateIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={() => onDelete(recipe)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
      <Link to={`${_id}`} style={{ textDecoration: "none" }} key={_id} id={_id}>
        <Typography variant="p" color={"initial"}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          {ingredientsText}
        </Typography>
      </Link>
    </Card>
  );
}

function getIngredientsText(ingredients) {
  const maxChars = 25;
  let text = "";

  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];

    if (text.length + ingredient.ingredient.name.length > maxChars) {
      text += ` ... (${ingredients.length - i}) `;
      break;
    }
    text += ` ${ingredient.ingredient.name},`;
  }

  text = text.slice(0, -1);

  return text;
}

export default RecipeCard;
