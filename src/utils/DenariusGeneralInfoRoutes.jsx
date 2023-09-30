const SERVER_IP = "pokeapi.co/api/v2/pokemon/ditto";

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
