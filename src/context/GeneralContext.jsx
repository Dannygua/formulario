import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export function GeneralProvider({ children }) {
  const [loadingGeneralInfo, setLoadingGeneralInfo] = useState(true);
  const [CIorPassport, setCIorPassport] = useState();
  const [dataGeneralInfo, setDataGeneralInfo] = useState(null);
  const [formDataGeneralInfo, setFormDataGeneralInfo] = useState({});
  const [formDataMoneyInfo, setFormDataMoneyInfo] = useState({});

  useEffect(() => {
    setLoadingGeneralInfo(false);
  }, []);

  const ChangeCIorPassport = (CIorPassport) => {
    setCIorPassport(CIorPassport);
  };

  const ChangeFormDataGeneralInfo = (CIorPassport) => {
    setFormDataGeneralInfo(CIorPassport);
  };

  const ChangeFormDataMoneyInfo = (CIorPassport) => {
    setFormDataMoneyInfo(CIorPassport);
  };

  const ChangeDataGeneralInfo = (CIorPassport) => {
    setDataGeneralInfo(CIorPassport);
  };

  //const Logout = () => {};

  const data = {
    variable1: "Danny",
    dataGeneralInfo,
    CIorPassport,
    ChangeCIorPassport,
    ChangeFormDataGeneralInfo,
    ChangeFormDataMoneyInfo,
    ChangeDataGeneralInfo,
    formDataGeneralInfo,
    formDataMoneyInfo,
  };

  if (loadingGeneralInfo) return "Cargando...";

  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
}
