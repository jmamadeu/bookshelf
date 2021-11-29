import axios from "axios";
import { QueryClient } from "react-query";

export const API_KEY = "api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR";

export const api = axios.create({
  baseURL: `https://api.nytimes.com/svc/books/v3/lists`,
});

export const queryClient = new QueryClient();
