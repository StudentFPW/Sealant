import axios from "axios";

import secureLocalStorage from "react-secure-storage";

import { main } from "../urls";

export const axiosInstance = axios.create({ baseURL: main });


axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    async function (error) {
        // Do something with request error
        if (error['response']['status'] === 401) {
            const response = await axios.post(`${main}/api/v1/token/refresh/`, { refresh: secureLocalStorage.getItem("refreshToken") });
            secureLocalStorage.setItem("token", response.data["access"]);
        };
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    async function (error) {
        // Do something with response error
        if (error['response']['status'] === 401) {
            const response = await axios.post(`${main}/api/v1/token/refresh/`, { refresh: secureLocalStorage.getItem("refreshToken") });
            secureLocalStorage.setItem("token", response.data["access"]);
        };
        return Promise.reject(error);
    });
