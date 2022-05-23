import http from "./http";

const route = "/ingredient";

export const ingredientList = () => {
  return http.get(`${route}/list`);
};

export const ingredientAdd = (ingredient) => {
  return http.post(`${route}/add`, ingredient);
};

export const ingredientEdit = (ingredient) => {
  return http.post(`${route}/edit`, ingredient);
};

export const ingredientDelete = (ingredient) => {
  return http.post(`${route}/delete`, ingredient);
};
