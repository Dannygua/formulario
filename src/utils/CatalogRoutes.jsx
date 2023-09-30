const SERVER_IP =
  "prod-01.westcentralus.logic.azure.com:443/workflows/9d2dd8b84eae42c3a1970a8acf40155e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EMPFmxq7QcwwJPEKDGnzjX-_BoMOh2TTPd8OO7t1mUg";

export const ENVCATALOG = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
