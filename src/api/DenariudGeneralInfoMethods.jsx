import { ENVDENARIUSGENERALINFO } from "../utils/DenariusGeneralInfoRoutes";

const baseApi = ENVDENARIUSGENERALINFO.BASE_PATH;

export class DenariusGeneralInfo {
  getGeneralInfo = async (IDData) => {
    // descomentar para ver la informacion que se envia a la api Denarius
    //console.log("Datos Enviados a Denarius mediante POST - Ruta: DenariudGeneralInfoMethods");
    //console.log(IDData);
    //console.log("se envia a la URL - Ruta: DenariudGeneralInfoMethods");
    //console.log(baseApi);
    const url = `${baseApi}`;
    // const params = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(IDData),
    // };

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    //SE USARA CUANDO LA API MANDE UN ESTADO 200
    // if (response.status !== 200) {
    // const responseData = await response.json();
    // return responseData;
    // }

    const responseData = await response.json();
    return responseData;
  };
}
