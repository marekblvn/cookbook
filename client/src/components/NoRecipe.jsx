import React from "react";
import { Container, Typography } from "@mui/material";

function NoRecipe() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">No matching recipes found</Typography>
    </Container>
  );
}

export default NoRecipe;
