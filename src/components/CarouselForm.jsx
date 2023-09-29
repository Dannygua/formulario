import { Carousel, Button } from "antd";
import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import "../css/GeneralInfoForm.css";
import MoneyInfoForm from "./MoneyInfoForm";

const CarouselForm = () => {
  const [formDataGeneralInfo, setFormDataGeneralInfo] = useState({});
  const [formDataMoneyInfo, setFormDataMoneyInfo] = useState({});

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

  return (
    <>
      <Carousel effect="fade" afterChange={onChange}>
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
      <Button onClick={handleFormSubmit}>Enviar</Button>
    </>
  );
};

export default CarouselForm;
