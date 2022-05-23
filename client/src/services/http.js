import { create } from "apisauce";

const URL = "http://localhost:3001/api"; //přemístit do .env

const api = create({
  baseURL: URL,
});

export default api;
