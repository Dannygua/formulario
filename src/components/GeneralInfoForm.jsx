import { Form, Input, Col, Row, DatePicker, Select, Card } from "antd";
import "../css/GeneralInfoForm.css";
import PropTypes from "prop-types"; // Importa PropTypes

const GeneralInfoForm = ({ setFormDataGeneralInfo, formDataGeneralInfo }) => {
  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    setFormDataGeneralInfo({
      ...formDataGeneralInfo,
      [fieldName]: value,
    });
  };

  return (
    <div>
      <div className="container">
        <Card title="1 - Informacion General" bordered={true}>
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
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              layout="vertical"
            >
              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
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
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "lastname",
                          e.target.value
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Nombre"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
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
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "passport",
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
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm(
                          "province",
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
                      onChange={(e) =>
                        handleInputChangeGeneralInfoForm("city", e.target.value)
                      }
                    >
                      <Select.Option value="Casado">Casado</Select.Option>
                      <Select.Option value="Soltero">Soltero</Select.Option>
                    </Select>
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

GeneralInfoForm.propTypes = {
  formDataGeneralInfo: PropTypes.object.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
  setFormDataGeneralInfo: PropTypes.func.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
};

export default GeneralInfoForm;
