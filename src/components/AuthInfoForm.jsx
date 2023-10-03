import { Form, Input, Card, Button, Row, Col, Checkbox } from "antd";
import { useGeneralVariables } from "../hooks/GeneralContext";
import "../css/GeneralInfoForm.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataUpdate } from "../hooks/useSendForm";

const AuthInfoForm = ({ goToSlideCarusel }) => {
  const {
    ChangeFormAuthInfo,
    dataGeneralInfo,
    formDataLegalInfo,
    formDataMoneyInfo,
    formDataGeneralInfo,
    formDataAuthInfo,
    DatatoUpdate,
    ChangeDatatoUpdate,
  } = useGeneralVariables();
  const navigate = useNavigate();

  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormAuthInfo({
      ...formDataAuthInfo,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    return () => {
      console.log("PRIMEROS DATOS GUARDADOS EN LEGAL");
      console.log(formDataLegalInfo);
    };
  }, [formDataLegalInfo]);

  const initialValues = {
    months: dataGeneralInfo?.Nombres, // Valor inicial para el campo 'nombre'
    years: dataGeneralInfo?.Nombres, // Valor inicial para el campo 'correo'
  };

  const onFinish = (values) => {
    ChangeFormAuthInfo(values);
    const combinedData = {
      ...formDataGeneralInfo,
      ...formDataMoneyInfo,
      ...formDataLegalInfo,
      ...formDataAuthInfo,
    };
    ChangeDatatoUpdate(combinedData);
    fetchDataUpdate(combinedData);
    // navigate("/");
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
                      name="AuthForm"
                      labelCol={{
                        span: 16,
                      }}
                      wrapperCol={{
                        span: 22,
                      }}
                      autoComplete="off"
                      layout="vertical"
                      rules={[
                        {
                          required: true,

                          message: "Debes aceptar los términos y condiciones.",
                        },
                      ]}
                    >
                      <Row gutter={16}>
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            name="AuthOne"
                            valuePropName="checked"
                            className="justify"
                          >
                            <Checkbox>
                              Acepto la Cláusula informativa y autorización de
                              Tratamiento de Datos Personales.
                            </Checkbox>
                          </Form.Item>
                        </Col>

                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            name="AuthTwo"
                            valuePropName="checked"
                            className="justify"
                          >
                            <Checkbox>
                              Acepto la Política de Privacidad
                            </Checkbox>
                          </Form.Item>
                        </Col>

                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            name="AuthThree"
                            valuePropName="checked"
                            className="justify"
                          >
                            <Checkbox>
                              Acepto los Términos y condiciones de uso de
                              canales digitales de SG
                            </Checkbox>
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
