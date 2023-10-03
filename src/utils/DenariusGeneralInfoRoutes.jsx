const SERVER_IP =
  "prod-25.westcentralus.logic.azure.com:443/workflows/8293874c64384119a031a3e503a2a4c1/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Rk52xKTckCxlj1UpKuefcsY0UVWejNqqhQuULpoyvAA";

export const ENVDENARIUSGENERALINFO = {
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
