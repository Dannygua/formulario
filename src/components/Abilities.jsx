import { useEffect } from "react";
import { useGeneralVariables } from "../hooks/GeneralContext";
import { Select } from "antd";

const Abilities = ({ handleInputChangeGeneralInfoForm }) => {
  const { dataGeneralInfo } = useGeneralVariables();

  return (
    <Select
      placeholder="Ingresa tu Ciudad"
      onChange={(value) => {
        handleInputChangeGeneralInfoForm("city", value);
      }}
    >
      {dataGeneralInfo.abilities.map((objeto) => (
        <Select.Option value="74">Ecuador</Select.Option>
      ))}
    </Select>
  );
};

export default Abilities;
