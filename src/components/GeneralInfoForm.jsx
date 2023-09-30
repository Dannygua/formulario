import { Form, Input, Col, Row, DatePicker, Select, Card } from "antd";
import "../css/GeneralInfoForm.css";
import { useGeneralVariables } from "../hooks/GeneralContext";
import { useEffect, useState } from "react";
import { Catalog } from "../api/CatalogMethods";

const GeneralInfoForm = () => {
  const { ChangeFormDataGeneralInfo, formDataGeneralInfo } =
    useGeneralVariables();
  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormDataGeneralInfo({
      ...formDataGeneralInfo,
      [fieldName]: value,
    });
  };

  const CatalogController = new Catalog();
  const [provinceCatalog, setProvinceCatalog] = useState({});

  const ChangeCatalog = async (CatalogData) => {
    const response = await CatalogController.getCatalog(CatalogData);
    setProvinceCatalog(response?.ResultSets?.Table1); // Actualiza el estado con los datos
    console.log(response);
    return response;
  };

  useEffect(() => {
    console.log("Data");
    console.log(provinceCatalog);
  }, [provinceCatalog]);

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
              className="GeneralInfoForm"
              name="basic"
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
                    className="LabelGeneralInfo"
                    label="Apellido"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tus apellidos"
                      onChange={(e) => {
                        handleInputChangeGeneralInfoForm(
                          "lastname",
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
                    name="firstname"
                    colon={false}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tus nombres"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "firstname",
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
                    label="Nacionalidad"
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Selecciona tu nacionalidad"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "nationality",
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
                    name="passport"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu CI/ Pasaporte"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "passport",
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
                    name="birthdate"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <DatePicker
                      className="DataPickerClass"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "birthdate",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Genero"
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu Genero"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "gender",
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
                    label="Estado civil"
                    name="civilstate"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Ingresa tu Estado Civil"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "civilstate",
                          e.target.value
                        )
                      }
                    >
                      <Select.Option value="Casado">Casado</Select.Option>
                      <Select.Option value="Soltero">Soltero</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Profesión"
                    name="profession"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu Profesion"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "profession",
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
                    label="Provincia"
                    name="province"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Ingresa tu Provincia"
                      onChange={(value) => {
                        ChangeCatalog({
                          token_id:
                            "P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0",
                          Nivel: 3,
                          idCatalogo: 13,
                          CodigoPadre: value,
                        });
                        handleInputChangeGeneralInfoForm("province", value);
                      }}
                    >
                      <Select.Option value="744">Ecuador</Select.Option>
                      <Select.Option value="727">Chile</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Ciudad"
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Ingresa tu Ciudad"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm("city", e.target.value)
                      }
                    ></Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  {" "}
                  <Form.Item
                    wrapperCol={{
                      span: 23,
                    }}
                    label="Dirección de domicilio"
                    name="homeAddress"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu domicilio"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "homeAddress",
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
                    label="Tiempo de residencia"
                    name="residenceTime"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu residencia"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "residenceTime",
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
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ingresa tu numero de teléfono"
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "phoneNumber",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
