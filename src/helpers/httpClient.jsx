import axios from "axios"
import { API_URL } from "./api"
import { getLanguage } from "./language"

export const getNotAuthInstance = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      lang: getLanguage(),
    },
  });
};
