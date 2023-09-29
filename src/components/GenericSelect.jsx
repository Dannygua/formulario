import React from "react";
import { Select } from "antd";

const GenericSelect = ({
  handleInputChangeGeneralInfoForm,
  loading,
  dataCatalogo,
}) => {
  return loading ? (
    <>
      {dataCatalogo.map((provincia) => {
        <div>Hola</div>;
      })}
    </>
  ) : (
    "Cargando..."
  );
};

export default GenericSelect;
