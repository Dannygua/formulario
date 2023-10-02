const SERVER_IP = "20.242.65.100:40352/api/Cliente";

export const ENVDENARIUSGENERALINFO = {
  BASE_PATH: `http://${SERVER_IP}`,
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
