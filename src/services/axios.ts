import axios, { AxiosInstance } from "axios";

//config of axios
export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
}) as AxiosInstance;
