import { Form, Input, Card, Button, Row, Col } from "antd";
import { useGeneralVariables } from "../hooks/GeneralContext";
import "../css/GeneralInfoForm.css";
import { useEffect } from "react";

const EcononyInfoForm = ({ goToSlideCarusel }) => {
  const {
    ChangeFormDataMoneyInfo,
    formDataMoneyInfo,
    formDataGeneralInfo,
    dataGeneralInfo,
  } = useGeneralVariables();

  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormDataMoneyInfo({
      ...formDataMoneyInfo,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    return () => {
      console.log("PRIMEROS DATOS GUARDADOS EN INORMACION GENERAL");
      console.log(formDataGeneralInfo);
    };
  }, [formDataGeneralInfo]);

  const initialValues = {
    jobtype: dataGeneralInfo?.Nombres, // Valor inicial para el campo 'nombre'
    monthlyincome: dataGeneralInfo?.Nombres, // Valor inicial para el campo 'correo'
  };

  const onFinish = (values) => {
    ChangeFormDataMoneyInfo(values);
    goToSlideCarusel(2);
  };

  const onBack = (e) => {
    e.preventDefault();
    goToSlideCarusel(0);
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
                  <span className="NumberTitleCard">2</span>
                  Actividad Económica
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
                      name="EconomyForm"
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
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Tipo de empleo"
                            name="jobtype"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Tipo de empleo"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "jobtype",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Ingreso Mensual"
                            name="monthlyincome"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa tu Ingreso Mensual"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "monthlyincome",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={1} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item className="TitleCardSecundary">
                            <span className="TitleCardSecundary">
                              <span className="NumberTitleCard">3</span>
                              Datos Económicos
                            </span>
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Total Activos"
                            name="totalassets"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Total Activos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "totalassets",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Total Pasivos"
                            name="totalliabilities"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa el Total Pasivos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "totalliabilities",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Ingresos Mensuales"
                            name="monthlyincome"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa los Ingresos Mensuales"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "monthlyincome",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Egresos Mensuales"
                            name="monthlyexpenditures"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa los Egresos Mensuales"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "monthlyexpenditures",
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

export default EcononyInfoForm;
