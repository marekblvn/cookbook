import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { Typography, Card, CardContent, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import useLoad from "../hooks/useLoad";
import { recipeGet } from "../services/recipe.service";
import { Get } from "../errors/recipe.error";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

import "./recipeDetail.css";

function RecipeDetail() {

  const { recipeId } = useParams();

  const { data:recipe, loading, error } = useLoad(recipeGet, [recipeId], [Get.invalidDtoIn, Get.recipeDoesNotExist]);

  const [amount, setAmount] = useState(4);
  
  if (loading) return <Loading/>

  if (error) return <ErrorMessage message={error.message} />;
  
  if(recipe){
    return (
      <div className="recipeDetailContainer">
        <Card className="recipeCardDetail verticalHorizonCenter" sx={{ minWidth: 275 }}>       
          <div className="row" style={{display: "flex", justifyContent: "right"}}>
            <Link to="/" style={{textDecoration: "none", color:"white"}} title="Back to home">
              <CloseIcon>
                <CloseIcon />
              </CloseIcon>
            </Link>        
          </div>   
          <Typography style={{ marginTop: "10px" }} className="center" variant="h3">
            {recipe.name} <hr />
          </Typography>
          <CardContent>
              <div className="row">
                <div className="column">         
                    <Typography style={{ marginTop: "25px" }} variant="h4">
                      Ingredients
                    </Typography>
                    <ul className="list">               
                          {recipe.ingredients.map((ingredient, index) => {
                          return <li key={index}> {ingredient.ingredient.name} - {ingredient.amount * amount} {ingredient.ingredient.unit} </li>;
                          })}
                    </ul>
                    <Typography style={{ marginTop: "25px" }} variant="h4">
                      Instructions
                    </Typography>
                    <p style={{padding: "20px"}}>
                      {recipe.description}
                    </p>                                          
                </div>

                <div className="column">               
                  <div className="preparationLengthCircle" style={{ marginTop: "20px" }}>               
                    {recipe.preparationLength} minutes
                  </div>
                  <Typography style={{marginTop: "25px"}} className="center" variant="h4">
                    Preparation length 
                  </Typography><br />

                  <Typography style={{ marginTop: "25px", marginBottom: "25px" }} className="center" variant="h4">
                      Number of servings
                  </Typography> 

                  <div className="wrapper">
                    <Button disabled={amount <= 1} onClick={() => setAmount(value => value - 1)} color="inherit">
                      <RemoveIcon sx={{ fontSize: 40 }} className="icon"></RemoveIcon>
                    </Button>
                    <span className="num">{amount}</span>
                    <Button onClick={() => setAmount(value => value + 1)} color="inherit">
                      <AddIcon sx={{ fontSize: 40 }} className="icon"></AddIcon>
                    </Button>
                  </div>

                </div>               
              </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  else{
    return <Loading/>
  }
}

export default RecipeDetail;
