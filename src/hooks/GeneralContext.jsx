import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export const useGeneralVariables = () => useContext(GeneralContext);
