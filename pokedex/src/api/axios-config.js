import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const pokeApi = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});
