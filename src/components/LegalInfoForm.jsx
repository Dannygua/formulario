import { Form, Input, Card, Button, Row, Col } from "antd";
import { useGeneralVariables } from "../hooks/GeneralContext";
import "../css/GeneralInfoForm.css";
import { useEffect } from "react";

const LegalInfoForm = ({ goToSlideCarusel }) => {
  const {
    ChangeFormLegalInfo,
    formLegalInfo,
    dataGeneralInfo,
    formDataMoneyInfo,
  } = useGeneralVariables();

  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormLegalInfo({
      ...formLegalInfo,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    console.log("PRIMEROS DATOS GUARDADOS EN CONTEXT");
    console.log(formDataMoneyInfo);
  }, [formDataMoneyInfo]);

  const initialValues = {
    months: dataGeneralInfo?.name, // Valor inicial para el campo 'nombre'
    years: dataGeneralInfo?.name, // Valor inicial para el campo 'correo'
  };

  const onFinish = (values) => {
    ChangeFormLegalInfo(values);
    goToSlideCarusel(3);
  };

  const onBack = (e) => {
    e.preventDefault();
    goToSlideCarusel(1);
  };

  return (
    <div>
      {" "}
      <div className="container">
        <Row>
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
          <Col xs={22} sm={22} md={24} lg={24} xl={24}>
            <Card
              className="CardGeneralForm"
              title={
                <span className="TitleCard">
                  <span className="NumberTitleCard">4</span>
                  Referencias Bancarias
                </span>
              }
              bordered={true}
            >
              <Row>
                <div className="centered-form">
                  <Col xs={22} sm={22} md={24} lg={24} xl={24}>
                    <Form
                      initialValues={initialValues}
                      className="GeneralInfoForm"
                      onFinish={(e) => onFinish(e)}
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
                        <Col span={12} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            wrapperCol={{
                              span: 23,
                            }}
                            label="Nombre de la Institución"
                            name="institution"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Nombre de la Institución"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "institution",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Tipo de cuenta"
                            name="accounttype"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Tipo de cuenta"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "accounttype",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="No. de cuenta"
                            name="accountnumber"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el No. de cuenta"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "accountnumber",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={1} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item className="TitleCardSecundary">
                            <span className="TitleCardSecundary">
                              <span className="NumberTitleCard">5</span>
                              Representante legal
                            </span>
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Funcionario público"
                            name="civilservant"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Funcionario público"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "civilservant",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Nombre del Funcionario Publico"
                            name="civilservantname"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Funcionario público"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "civilservantname",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Miembro de algún partido político"
                            name="politicalparty"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Miembro de algún partido político"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "politicalparty",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Nombre del partido político"
                            name="politicalpartyname"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Nombre del partido político"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "politicalpartyname",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Origen de los fondos"
                            name="sourcefunds"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Origen de los fondos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "sourcefunds",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Destino de los fondos"
                            name="destinationfunds"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Destino de los fondos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "destinationfunds",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12} xs={15} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
                            <Button
                              className="custom-button"
                              type="secundary"
                              htmlType="submit"
                            >
                              Continuar
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Col>

                  <Button
                    className="custom-button-back"
                    type="secundary"
                    htmlType="submit"
                    onClick={onBack}
                  >
                    Regresar
                  </Button>
                </div>
              </Row>
            </Card>
          </Col>
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
        </Row>
      </div>
    </div>
  );
};

export default LegalInfoForm;
