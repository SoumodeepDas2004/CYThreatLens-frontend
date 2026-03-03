import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const getCountryStats = () => API.get("/scan/country-stats");
export const getMapData = () => API.get("/scan/map-data");
export const getHistory = () => API.get("/scan/history");
export const scanIP = (ip) => API.post("/scan/ip", { ip });
export const getGlobalNews = async () => {
    return fetch("http://127.0.0.1:8000/news/global")
        .then(res => res.json());
};
export const getTechNews = async () => {
  return fetch("http://127.0.0.1:8000/news/tech")
    .then(res => res.json());
};

export default API;