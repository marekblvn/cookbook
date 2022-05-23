require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");

// controllers
const recipe = require("./src/controller/recipe-controller");
const ingredient = require("./src/controller/ingredient-controller");
// controllers

// utils
const db = require("./src/utils/db");
// utils

// middleware
const error = require("./src/middleware/error");
app.use(cors());
// middleware

const port = process.env.PORT || 3001;

db();

app.use(express.json());

app.use("/api/recipe", recipe);
app.use("/api/ingredient", ingredient);
app.use(error);

app.listen(port, () => console.log(`Server started on port ${port}`));
