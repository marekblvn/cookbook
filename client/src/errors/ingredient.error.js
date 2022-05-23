import Error from "./Error";

const ERROR_PREFIX = "ingredient/";
const ADD_UC_CODE = `${ERROR_PREFIX}add/`;
const EDIT_UC_CODE = `${ERROR_PREFIX}edit/`;
const DELETE_UC_CODE = `${ERROR_PREFIX}delete/`;

export const Add = {
  invalidDtoIn: new Error(
    "API",
    `${ADD_UC_CODE}invalidDtoIn`,
    "Data sent to the server is not valid"
  ),
};

export const Edit = {
  invalidDtoIn: new Error(
    "API",
    `${EDIT_UC_CODE}invalidDtoIn`,
    "Data sent to the server is not valid"
  ),
  ingredientDoesNotExist: new Error(
    "API",
    `${EDIT_UC_CODE}ingredientDoesNotExist`,
    "Ingredient with this id does not exist"
  ),
};

export const Delete = {
  invalidDtoIn: new Error(
    `${DELETE_UC_CODE}invalidDtoIn`,
    "API",
    "Data send to the server are not valid"
  ),
  ingredientDoesNotExist: new Error(
    "API",
    `${DELETE_UC_CODE}ingredientDoesNotExist`,
    "One or more ingredient does not exist"
  ),
  ingredientReferencedInRecipes: new Error(
    "API",
    `${DELETE_UC_CODE}ingredientReferencedInRecipes`,
    "Ingredient is referenced in recipes and can not be deleted"
  ),
};
