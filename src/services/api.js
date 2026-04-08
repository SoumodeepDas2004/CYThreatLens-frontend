import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
const API_URL = import.meta.env.VITE_API_URL;


export const getCountryStats = () => API.get("/scan/country-stats");
export const getMapData = () => API.get("/scan/map-data");
export const getHistory = () => API.get("/scan/history");
export const scanIP = (ip) => API.post("/scan/ip", { ip });
export const getGlobalNews = async () => {
    return fetch(`${API_URL}`+"/news/global")
        .then(res => res.json());
};
export const getTechNews = async () => {
  return fetch(`${API_URL}`+"/news/tech")
    .then(res => res.json());
};
export const getRssNews = async () => {
  return fetch(`${API_URL}`+"/news/rss")
    .then(res => res.json());
};
export const getintels = async () => {
  return fetch(`${API_URL}`+"/intel/events")
    .then(res => res.json());
};


export default API;