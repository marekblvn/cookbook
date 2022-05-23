import http from "./http";

const route = "/recipe";

export const recipeList = () => {
  return http.get(`${route}/list`);
};

export const recipeAdd = (recipe) => {
  return http.post(`${route}/add`, recipe);
};

export const recipeEdit = (recipe) => {
  return http.post(`${route}/edit`, recipe);
};

export const recipeGet = (id) => {
  return http.get(`${route}/get/${id}`);
};

export const recipeDelete = (recipe) => {
  return http.post(`${route}/delete`, { _id: recipe._id });
};
