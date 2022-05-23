import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Typography } from "@mui/material";

function Loading() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">
        <CircularProgress /> Loading
      </Typography>
    </Container>
  );
}

export default Loading;
