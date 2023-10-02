import { ENVCATALOG } from "../utils/CatalogRoutes";

const baseApi = ENVCATALOG.BASE_PATH;

export class Catalog {
  getCatalog = async (CatalogData) => {
    // descomentar para ver la informacion que se envia a la api Catalogos
    //console.log("Datos Enviados al Catalogo mediante POST - Ruta: CatalogMethods");
    //console.log(CatalogData);
    //console.log("se envia a la URL - Ruta: CatalogMethods");
    //console.log(baseApi);
    const url = `${baseApi}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CatalogData),
    };

    const response = await fetch(url, params);

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
