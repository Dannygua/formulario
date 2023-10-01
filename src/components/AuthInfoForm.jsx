import { Form, Input, Card, Button, Row, Col } from "antd";
import { useGeneralVariables } from "../hooks/GeneralContext";
import "../css/GeneralInfoForm.css";
import { useEffect } from "react";

const AuthInfoForm = ({ goToSlideCarusel }) => {
  const {
    ChangeFormAuthInfo,
    formAuthInfo,
    dataGeneralInfo,
    formDataLegalInfo,
  } = useGeneralVariables();

  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormAuthInfo({
      ...formAuthInfo,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    console.log("PRIMEROS DATOS GUARDADOS EN CONTEXT");
    console.log(formDataLegalInfo);
  }, [formDataLegalInfo]);

  const initialValues = {
    months: dataGeneralInfo?.name, // Valor inicial para el campo 'nombre'
    years: dataGeneralInfo?.name, // Valor inicial para el campo 'correo'
  };

  const onFinish = (values) => {
    ChangeFormAuthInfo(values);
    goToSlideCarusel(3);
  };

  const onBack = (e) => {
    e.preventDefault();
    goToSlideCarusel(2);
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
                  <span className="NumberTitleCard">6</span>
                  Autorización
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
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Mensualidad"
                            name="months"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa tus apellidos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "month",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Anualidad"
                            name="years"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Ingresa tus apellidos"
                              onChange={(e) =>
                                handleInputChangeGeneralInfoForm(
                                  "year",
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
                              Enviar
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

export default AuthInfoForm;
