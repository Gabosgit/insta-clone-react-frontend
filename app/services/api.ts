import axios from "axios";

// Access the environment variable.
const apiUrl = import.meta.env.VITE_API_URL;

// We define the base URL of our backend API.
const api = axios.create({
  baseURL: apiUrl, // Fastify backend address
});

export { api };