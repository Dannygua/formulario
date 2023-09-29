import { Carousel, Button } from "antd";
import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import "../css/GeneralInfoForm.css";
import MoneyInfoForm from "./MoneyInfoForm";

const CarouselForm = () => {
  const [formDataGeneralInfo, setFormDataGeneralInfo] = useState({});
  const [formDataMoneyInfo, setFormDataMoneyInfo] = useState({});
  const [DataGeneralInfo, setDataGeneralInfo] = useState({});
  const [dataCatalogo, setDataCatalogo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = () => {
    console.log("Datos del Formulario 1:", formDataGeneralInfo);
    console.log("Datos del Formulario 2:", formDataMoneyInfo);
  };

  const contentStyle = {
    margin: 0,
    height: "auto",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "rgba(251, 176, 59, 1)",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  async function fetchDataGeneralInfo() {
    try {
      // const opciones = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(datos),
      // };

      const url = "https://pokeapi.co/api/v2/pokemon/ditto";

      const response = await fetch(url); // Reemplaza con tu URL de API

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setDataGeneralInfo(responseData); // Actualiza el estado con los datos
      console.log(responseData);
      setLoading(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }

  async function fetchDataCatalogo(datos) {
    try {
      const opciones = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };

      const url =
        "https://prod-01.westcentralus.logic.azure.com:443/workflows/9d2dd8b84eae42c3a1970a8acf40155e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EMPFmxq7QcwwJPEKDGnzjX-_BoMOh2TTPd8OO7t1mUg";

      const response = await fetch(url, opciones); // Reemplaza con tu URL de API

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setDataCatalogo(responseData.ResultSets.Table1); // Actualiza el estado con los datos
      console.log(responseData);
      setLoading(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }

  return (
    <>
      <Carousel effect="fade" afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <GeneralInfoForm
              dataCatalogo={dataCatalogo}
              setFormDataGeneralInfo={setFormDataGeneralInfo}
              formDataGeneralInfo={formDataGeneralInfo}
              setLoading={setLoading}
              loading={loading}
              fetchDataCatalogo={fetchDataCatalogo}
              DataGeneralInfo={DataGeneralInfo}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <MoneyInfoForm
              setFormDataMoneyInfo={setFormDataMoneyInfo}
              formDataMoneyInfo={formDataMoneyInfo}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <GeneralInfoForm
              setFormDataGeneralInfo={setFormDataGeneralInfo}
              formDataGeneralInfo={formDataGeneralInfo}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <GeneralInfoForm
              setFormDataGeneralInfo={setFormDataGeneralInfo}
              formDataGeneralInfo={formDataGeneralInfo}
            />
          </h3>
        </div>
      </Carousel>
      <Button onClick={fetchDataGeneralInfo}>Enviar</Button>
    </>
  );
};

export default CarouselForm;
