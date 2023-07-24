import axios from "axios";

const itemApi = axios.create({
  baseURL: "http://localhost:8000/items/api/v1/items/",
});

export const getAllItems = () => itemApi.get("/");

export const getItem = (id) => itemApi.get(`/${id}/`);

export const createItem = (item) => itemApi.post("/", item);

export const deleteItem = (id) => itemApi.delete(`/${id}`);

export const updateItem = (id, item) => itemApi.put(`/${id}/`, item);


