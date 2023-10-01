import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export function GeneralProvider({ children }) {
  const [loadingGeneralInfo, setLoadingGeneralInfo] = useState(true);
  const [CIorPassport, setCIorPassport] = useState();
  const [dataGeneralInfo, setDataGeneralInfo] = useState([]);
  const [formDataGeneralInfo, setFormDataGeneralInfo] = useState({});
  const [formDataMoneyInfo, setFormDataMoneyInfo] = useState({});
  const [formDataLegalInfo, setFormLegalInfo] = useState({});
  const [formDataAuthInfo, setFormAuthInfo] = useState({});
  const [generalDataUpdate, setGeneralDataUpdate] = useState({});

  useEffect(() => {}, []);

  const ChangeLoadingGeneralInfo = (loginValue) => {
    setLoadingGeneralInfo(loginValue);
  };

  const ChangeGeneralDataUpdate = (CIorPassport) => {
    setGeneralDataUpdate(CIorPassport);
  };

  const ChangeCIorPassport = (CIorPassport) => {
    setCIorPassport(CIorPassport);
  };

  const ChangeFormDataGeneralInfo = (GeneralData) => {
    setFormDataGeneralInfo(GeneralData);
  };

  const ChangeFormDataMoneyInfo = (EconomyData) => {
    setFormDataMoneyInfo(EconomyData);
  };

  const ChangeDataGeneralInfo = (CIorPassport) => {
    setDataGeneralInfo(CIorPassport);
  };

  const ChangeFormLegalInfo = (LegalData) => {
    setFormLegalInfo(LegalData);
  };

  const ChangeFormAuthInfo = (AuthData) => {
    setFormAuthInfo(AuthData);
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
    ChangeLoadingGeneralInfo,
    ChangeFormLegalInfo,
    ChangeFormAuthInfo,
    formDataGeneralInfo,
    formDataMoneyInfo,
    loadingGeneralInfo,
    generalDataUpdate,
    formDataLegalInfo,
    formDataAuthInfo,
    ChangeGeneralDataUpdate,
  };

  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
}
