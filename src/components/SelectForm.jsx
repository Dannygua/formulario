import { Select } from "antd";

const SelectForm = ({
  handleInputChangeGeneralInfoForm,
  DataCatalog,
  ChangeCatalog,
  Nivel,
  idCatalogo,
  namevalue,
  namelabel,
  setDataCalatog,
  loadingCatalog,
}) => {
  return (
    <Select
      placeholder={`Ingresa tu ${namelabel}`}
      onChange={(value, key) => {
        ChangeCatalog(
          {
            token_id:
              "P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0",
            Nivel: Nivel,
            idCatalogo: idCatalogo,
            CodigoPadre: value,
          },
          setDataCalatog,
          loadingCatalog
        );
        handleInputChangeGeneralInfoForm(namevalue, key.children);
      }}
    >
      {DataCatalog.map((catalog) => (
        <Select.Option
          key={catalog.Descripcion}
          value={catalog.IdDetalleCatalogo}
        >
          {catalog.Descripcion}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
