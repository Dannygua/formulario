import { ENVDENARIUSGENERALINFO } from "../utils/DenariusGeneralInfoRoutes";
const baseApi = ENVDENARIUSGENERALINFO.BASE_PATH;

// export class DenariusGeneralInfo {
export const fetchDataReference = async (cedula) => {
  // descomentar para ver la informacion que se envia a la api Denarius
  console.log(
    "Datos Enviados a Denarius mediante POST - Ruta: DenariudGeneralInfoMethods"
  );
  console.log(cedula);
  //console.log("se envia a la URL - Ruta: DenariudGeneralInfoMethods");
  //console.log(baseApi);
  const url = `${baseApi}`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cedula),
  };
  try {
    const response = await fetch(url, params);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    //SE USARA CUANDO LA API MANDE UN ESTADO 200
    // if (response.status !== 200) {
    // const responseData = await response.json();
    // return responseData;
    // }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Capturar cualquier error, incluyendo errores de red y errores HTTP
    console.error("Error:", error.message);
  }
};
// }
