import React from "react";

const GetMethod = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); // Reemplaza con tu URL de API

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setData(responseData); // Actualiza el estado con los datos
        setLoading(false); // Indica que la carga ha finalizado
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // El array vacío [] indica que useEffect se ejecuta una vez (equivalente a componentDidMount)

  return <div>GetMethod</div>;
};

export default GetMethod;
