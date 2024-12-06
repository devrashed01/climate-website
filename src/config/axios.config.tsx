import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "";

// common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const publicRequest = axios.create({
  baseURL: apiUrl,
});

const privateRequest = axios.create({
  baseURL: apiUrl + "admin/",
  headers: {
    lang: "bn",
  },
});

const commonRequest = axios.create({
  baseURL: apiUrl,
});

commonRequest.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token || "";
    }
    config.headers["userapisecret"] = process.env.NEXT_PUBLIC_USER_API_SECRET;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

commonRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401 || error?.response?.status === "401") {
      localStorage.removeItem("token");
    }

    return Promise.reject(error.response.data);
  },
);

privateRequest.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token || "";
    }
    config.headers["userapisecret"] = process.env.NEXT_PUBLIC_USER_API_SECRET;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

privateRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401 || error?.response?.status === "401") {
      // localStorage.removeItem("token");
    }

    return Promise.reject(error.response.data);
  },
);

export { commonRequest, privateRequest, publicRequest };
