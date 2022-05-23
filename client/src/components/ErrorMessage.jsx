import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

function ErrorMessage({ message }) {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF4F1",
        color: "#d1290c",
        border: "1px solid #d1290c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">
        <ErrorIcon /> Error
      </Typography>
      <Typography variant="p">{message || "Error..."}</Typography>
    </Box>
  );
}

export default ErrorMessage;
