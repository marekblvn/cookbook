import Error from "./Error";

const ERROR_PREFIX = "recipe/";
const ADD_UC_CODE = `${ERROR_PREFIX}add/`;
const EDIT_UC_CODE = `${ERROR_PREFIX}edit/`;
const GET_UC_CODE = `${ERROR_PREFIX}get/`;

export const Add = {
  invalidDtoIn: new Error(
    "API",
    `${ADD_UC_CODE}invalidDtoIn`,
    "Data send to the server are not valid"
  ),
  ingredientDoesNotExist: new Error(
    "API",
    `${ADD_UC_CODE}ingredientDoesNotExist`,
    "One or more ingredient does not exist"
  ),
  ingredientsAreNotUnique: new Error(
    "API",
    `${ADD_UC_CODE}ingredientsAreNotUnique`,
    "Each ingredient has to be only once in the recipe"
  ),
};

export const Edit = {
  invalidDtoIn: new Error(
    "API",
    `${EDIT_UC_CODE}invalidDtoIn`,
    "Data send to the server are not valid"
  ),
  recipeDoesNotExist: new Error(
    "API",
    `${EDIT_UC_CODE}recipeDoesNotExist`,
    "Recipe with this id does not exist"
  ),
  ingredientDoesNotExist: new Error(
    "API",
    `${EDIT_UC_CODE}ingredientDoesNotExist`,
    "One or more ingredient does not exist"
  ),
  ingredientsAreNotUnique: new Error(
    "API",
    `${EDIT_UC_CODE}ingredientsAreNotUnique`,
    "Each ingredient has to be only once in the recipe"
  ),
};

export const Get = {
  invalidDtoIn: new Error(
    "API",
    `${GET_UC_CODE}invalidDtoIn`,
    "Data send to the server are not valid"
  ),
  recipeDoesNotExist: new Error(
    "API",
    `${GET_UC_CODE}recipeDoesNotExist`,
    "Recipe with this id does not exist"
  ),
};
