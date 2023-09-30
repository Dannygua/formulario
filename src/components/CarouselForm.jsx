import { Carousel, Button } from "antd";
import GeneralInfoForm from "./GeneralInfoForm";
import "../css/GeneralInfoForm.css";
import "../css/Carousel.css";
import MoneyInfoForm from "./MoneyInfoForm";
import { useGeneralVariables } from "../hooks/GeneralContext";
import { DenariusGeneralInfo } from "../api/DenariudGeneralInfoMethods";

const CarouselForm = () => {
  // Asi se llama a una contante del Context const { variable1 } = useGeneralVariables();
  const {
    formDataMoneyInfo,
    formDataGeneralInfo,
    ChangeDataGeneralInfo,
    dataGeneralInfo,
  } = useGeneralVariables();
  const GeneralInfoController = new DenariusGeneralInfo();

  const handleFormSubmit = () => {
    console.log("Datos del Formulario 1:", formDataGeneralInfo);
    console.log("Datos del Formulario 2:", formDataMoneyInfo);
  };

  const onChange = (currentSlide) => {
    console.log(" ID de el carusel " + currentSlide);
  };

  const GetGeneralInfo = async () => {
    const response = await GeneralInfoController.getGeneralInfo();
    ChangeDataGeneralInfo(response); // Actualiza el estado con los datos
    console.log(
      " Informacion General Denarius del Response Ruta - CarouselForm "
    );

    console.log(response);

    console.log(dataGeneralInfo);
    return response;
  };

  // async function fetchDataCatalogo(datos) {
  //   try {
  //     const opciones = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(datos),
  //     };

  //     const url =
  //       "https://prod-01.westcentralus.logic.azure.com:443/workflows/9d2dd8b84eae42c3a1970a8acf40155e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EMPFmxq7QcwwJPEKDGnzjX-_BoMOh2TTPd8OO7t1mUg";

  //     const response = await fetch(url, opciones); // Reemplaza con tu URL de API

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const responseData = await response.json();
  //     setDataCatalogo(responseData.ResultSets.Table1); // Actualiza el estado con los datos
  //     console.log(responseData);
  //     setLoading(true);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setLoading(false);
  //   }
  // }

  return (
    <>
      <Carousel effect="fade" afterChange={onChange}>
        <div>
          <h3 className="CarouselContentStyle">
            <GeneralInfoForm />
          </h3>
        </div>
        <div>
          <h3 className="CarouselContentStyle">
            <MoneyInfoForm />
          </h3>
        </div>
        <div>
          <h3 className="CarouselContentStyle">
            <GeneralInfoForm />
          </h3>
        </div>
        <div>
          <h3 className="CarouselContentStyle">
            <GeneralInfoForm />
          </h3>
        </div>
      </Carousel>
      <Button onClick={GetGeneralInfo}>Enviar</Button>
      <Button onClick={handleFormSubmit}>Actualizar</Button>
    </>
  );
};

export default CarouselForm;
