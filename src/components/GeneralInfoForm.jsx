import {
  Form,
  Input,
  Col,
  Row,
  DatePicker,
  Select,
  Card,
  Button,
  Radio,
} from "antd";
import moment from "moment";
import "../css/GeneralInfoForm.css";
import { useGeneralVariables } from "../hooks/GeneralContext";
import { useEffect, useState } from "react";
import { Catalog } from "../hooks/useCatalog";
import SelectForm from "./SelectForm";

const GeneralInfoForm = ({ goToSlideCarusel, countryCatalogg }) => {
  const {
    ChangeFormDataGeneralInfo,
    formDataGeneralInfo,
    dataGeneralInfo,
    loadingGeneralInfo,
    ChangeLoadingGeneralInfo,
  } = useGeneralVariables();
  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormDataGeneralInfo({
      ...formDataGeneralInfo,
      [fieldName]: value,
    });
  };

  const initialValues = {
    Apellidos: dataGeneralInfo?.Apellidos,
    Nombres: dataGeneralInfo?.Nombres,
    Profesion: dataGeneralInfo?.Profesion,
    Identificacion: dataGeneralInfo?.Identificacion,
    FechaNacimiento: moment(dataGeneralInfo?.FechaNacimiento),
    Genero: dataGeneralInfo?.Genero,
    Celular: dataGeneralInfo?.Celular,
    Email: dataGeneralInfo?.Email,
    Pais: dataGeneralInfo?.Pais,
    Provincia: dataGeneralInfo?.Provincia,
    Ciudad: dataGeneralInfo?.Ciudad,
    Direccion: dataGeneralInfo?.Direccion,
    //TiempoResidencia: dataGeneralInfo?.TiempoResidencia,
  };

  const CatalogController = new Catalog();
  const [provinceCatalog, setProvinceCatalog] = useState({});
  const [cityCatalog, setCityCatalog] = useState({});
  const [cityLoading, setCityLoading] = useState(true);

  const ChangeCatalog = async (CatalogData, DataCatalog, loadingCatalog) => {
    loadingCatalog(true);
    const response = await CatalogController.getCatalog(CatalogData);
    DataCatalog(response?.ResultSets?.Table1); // Actualiza el estado con los datos
    console.log("Catalogo de Provincias");
    console.log(response?.ResultSets?.Table1);
    loadingCatalog(false);
    return response;
  };

  const onFinish = (values) => {
    ChangeFormDataGeneralInfo({
      Email: values.Email,
      FechaNacimiento: values.FechaNacimiento._i,
      Celular: values.Celular,
      Pais: values.Pais,
      Provincia: values.Provincia,
      Direccion: values.Direccion,
    });
    goToSlideCarusel(1);
  };

  return (
    <div>
      <div className="container">
        <Card
          className="CardGeneralForm"
          title={
            <span className="TitleCard">
              <span className="NumberTitleCard">1</span> Información general
            </span>
          }
          bordered={true}
        >
          <div className="centered-form">
            <Form
              initialValues={initialValues}
              className="GeneralInfoForm"
              name="GeneralForm"
              onFinish={(e) => onFinish(e)}
              labelCol={{
                span: 16,
              }}
              wrapperCol={{
                span: 22,
              }}
              autoComplete="off"
              layout="vertical"
            >
              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Apellido"
                    name="Apellidos"
                    rules={[
                      {
                        required: true,
                        message: "Apellido requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tus apellidos"
                      onChange={(e) => {
                        handleInputChangeGeneralInfoForm(
                          "Apellidos",
                          e.target.value
                        );
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Nombre"
                    name="Nombres"
                    rules={[
                      {
                        required: true,
                        message: "Nombre Requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tus nombres"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Nombres",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                      {
                        required: true,
                        message: "Email requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu Email"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Email",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="CI / Pasaporte"
                    name="Identificacion"
                    rules={[
                      {
                        required: true,
                        message: "CI / Pasaporte requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu CI/ Pasaporte"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Identificacion",
                          e.target.value
                        )
                      }
                    />
                    {/* {loading ? DataGeneralInfo?.order : ""} */}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Fecha de nacimiento"
                    name="FechaNacimiento"
                    rules={[
                      {
                        required: true,
                        message: "Fecha de nacimiento requerida",
                      },
                    ]}
                  >
                    <DatePicker
                      className="DataPickerClass"
                      onChange={(value) =>
                        handleInputChangeGeneralInfoForm(
                          "FechaNacimiento",
                          value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Genero"
                    name="Genero"
                    className="formradiojob"
                    rules={[
                      {
                        required: true,
                        message: "Genero requerido",
                      },
                    ]}
                  >
                    <Radio.Group
                      onChange={(value) =>
                        handleInputChangeGeneralInfoForm(
                          "Genero",
                          value.target.value
                        )
                      }
                    >
                      <Radio className="radioGeneral" value="M">
                        Masculino
                      </Radio>
                      <Radio value="F"> Femenino </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Celular"
                    name="Celular"
                    rules={[
                      {
                        required: true,
                        message: "Celular requerido",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Ingresa tu Celular"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Celular",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Profesión"
                    name="Profesion"
                    rules={[
                      {
                        required: true,
                        message: "Profesion requerida",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu Profesion"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Profesion",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Pais"
                    name="Pais"
                    rules={[
                      {
                        required: true,
                        message: "Pais requerido",
                      },
                    ]}
                  >
                    <Select
                      showSearch // Habilita la búsqueda
                      optionFilterProp="children" // Propiedad para filtrar las opciones
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      placeholder="Ingresa tu Pais"
                      onChange={(value, key) => {
                        ChangeCatalog(
                          {
                            token_id:
                              "P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0",
                            Nivel: 3,
                            idCatalogo: 13,
                            CodigoPadre: value,
                          },
                          setProvinceCatalog,
                          ChangeLoadingGeneralInfo
                        );
                        handleInputChangeGeneralInfoForm("Pais", key.children);
                      }}
                    >
                      {countryCatalogg.map((country) => (
                        <Select.Option
                          key={country.Descripcion}
                          value={country.IdDetalleCatalogo}
                        >
                          {country.Descripcion}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Provincia"
                    name="Provincia"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your password!",
                    //   },
                    // ]}
                  >
                    {loadingGeneralInfo ? (
                      <Select placeholder="Ingresa tu Provincia">
                        Cargando...
                      </Select>
                    ) : (
                      <SelectForm
                        ChangeCatalog={ChangeCatalog}
                        Nivel={4}
                        idCatalogo={13}
                        namelabel="Provincia"
                        namevalue="Provincia"
                        setDataCalatog={setCityCatalog}
                        handleInputChangeGeneralInfoForm={
                          handleInputChangeGeneralInfoForm
                        }
                        DataCatalog={provinceCatalog}
                        loadingCatalog={setCityLoading}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Ciudad"
                    name="Ciudad"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your password!",
                    //   },
                    // ]}
                  >
                    {cityLoading ? (
                      <Select placeholder="Ingresa tu Ciudad">
                        Cargando...
                      </Select>
                    ) : (
                      <SelectForm
                        ChangeCatalog={ChangeCatalog}
                        Nivel={5}
                        idCatalogo={13}
                        namelabel="Ciudad"
                        namevalue="Ciudad"
                        // setDataCalatog={setCityCatalog}
                        handleInputChangeGeneralInfoForm={
                          handleInputChangeGeneralInfoForm
                        }
                        DataCatalog={cityCatalog}
                      />
                    )}
                  </Form.Item>
                </Col> */}

                <Col span={12}>
                  {" "}
                  <Form.Item
                    wrapperCol={{
                      span: 23,
                    }}
                    label="Dirección de domicilio"
                    name="Direccion"
                    rules={[
                      {
                        required: true,
                        message: "Dirección de domicilio requerida",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu domicilio"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Direccion",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* 
              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Tiempo de residencia"
                    name="TiempoResidencia"
                    rules={[
                      {
                        required: true,
                        message: "Tiempo de residencia requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu residencia"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "TiempoResidencia",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Teléfono celular"
                    name="Celular"
                    rules={[
                      {
                        required: true,
                        message: "Teléfono celular requerido",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu numero de teléfono"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "Celular",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row> */}
              <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
                <Button
                  className="custom-button"
                  type="secundary"
                  htmlType="submit"
                >
                  Continuar
                </Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
            {/* <Button type="primary" htmlType="submit" onClick={onFinish}>
              Continuar
            </Button> */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
