import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.AUTHORIZATION_KEY}`,
    Accept: "application/json",
  },
});

export const fetchCategories = async () => api.get("/api/categories");
