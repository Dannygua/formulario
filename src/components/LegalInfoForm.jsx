import { Form, Input, Card, Button, Row, Col, Radio, Checkbox } from "antd";
import { useGeneralVariables } from "../hooks/GeneralContext";
import "../css/GeneralInfoForm.css";
import { useEffect } from "react";

const LegalInfoForm = ({ goToSlideCarusel }) => {
  const {
    ChangeFormLegalInfo,
    formDataLegalInfo,
    dataGeneralInfo,
    formDataMoneyInfo,
  } = useGeneralVariables();

  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    ChangeFormLegalInfo({
      ...formDataLegalInfo,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    return () => {
      console.log("PRIMEROS DATOS GUARDADOS EN ECONOMY");
      console.log(formDataMoneyInfo);
    };
  }, [formDataMoneyInfo]);

  const initialValues = {
    // Institucion: dataGeneralInfo?.Institucion,
    // TipoCuenta: dataGeneralInfo?.TipoCuenta,
    NumeroCuentaAHO: dataGeneralInfo?.NumeroCuentaAHO,
    EsFuncionario: dataGeneralInfo?.EsFuncionario,
    // NombreFuncionario: dataGeneralInfo?.NombreFuncionario,
    PEP: dataGeneralInfo?.PEP,
    // NombrePartidoPolitico: dataGeneralInfo?.NombrePartidoPolitico,
    // NombrePartidoPolitico: dataGeneralInfo?.NombrePartidoPolitico,
    // OrigenFondos: dataGeneralInfo?.NombrePartidoPolitico,
    // DestinoFondos: dataGeneralInfo?.NombrePartidoPolitico,
  };

  const onFinish = (values) => {
    ChangeFormLegalInfo({});
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
                      name="LegalForm"
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
                        {/* <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            label="Nombre de la Institución"
                            name="Institucion"
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
                                  "Institucion",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col> */}
                        {/* <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Tipo de cuenta"
                            name="TipoCuenta"
                            className="formradiojob"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Radio.Group
                              onChange={(value) =>
                                handleInputChangeGeneralInfoForm(
                                  "TipoCuenta",
                                  value.target.value
                                )
                              }
                            >
                              <Radio className="radioGeneral" value="Ahorros">
                                Ahorros
                              </Radio>
                              <Radio value="Corriente"> Corriente </Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col> */}
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="No. de cuenta"
                            name="NumeroCuentaAHO"
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
                                  "NumeroCuentaAHO",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={24} xl={24}>
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
                            name="EsFuncionario"
                            className="formradiojob"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Radio.Group
                              onChange={(value) =>
                                handleInputChangeGeneralInfoForm(
                                  "EsFuncionario",
                                  value.target.value
                                )
                              }
                            >
                              <Radio className="radioGeneral" value={true}>
                                SI
                              </Radio>
                              <Radio value={false}> NO </Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>

                        {/* <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Nombre del Funcionario Publico"
                            name="NombreFuncionario"
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
                                  "NombreFuncionario",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col> */}

                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Miembro de algún partido político"
                            name="PEP"
                            className="formradiojob"
                            rules={[
                              {
                                required: true,
                                message: "Dato requerido",
                              },
                            ]}
                          >
                            <Radio.Group
                              onChange={(value) =>
                                handleInputChangeGeneralInfoForm(
                                  "PEP",
                                  value.target.value
                                )
                              }
                            >
                              <Radio className="radioGeneral" value={true}>
                                SI
                              </Radio>
                              <Radio value={false}> NO </Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>

                        {/* <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Nombre del partido político"
                            name="NombrePartidoPolitico"
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
                                  "NombrePartidoPolitico",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col> */}
                        {/* 
                        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Origen de los fondos"
                            name="OrigenFondos"
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
                                  "OrigenFondos",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col> */}

                        {/* <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
                          <Form.Item
                            label="Destino de los fondos"
                            name="DestinoFondos"
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
                                  "DestinoFondos",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Item>
                        </Col> */}
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                          <Form.Item
                            name="disabled"
                            valuePropName="checked"
                            className="justify"
                            rules={[
                              {
                                required: true,
                                message: "Se requiere Aprobar la Declaracion",
                              },
                            ]}
                          >
                            <Checkbox>
                              Declaro que el origen de los fondos entregados son
                              lícitos y consecuentemente no provienen de ninguna
                              actividad ilegal o ilícita, tipificadas en lasley
                              de Prevención, Detección y Erradicación del Delito
                              de Lavado de Activos y del Financiamiento de
                              Delitos. Autorizo a la institución realizar el
                              análisis y verificaciones que consideren
                              pertinentes e informar de manera inmediata y
                              documentada a la autoridad competente en casos de
                              investigación o cuando se detectare inusualidades.
                              Garantiza la veracidad de la información
                              proporcionada y renuncia a ejecutar cualquier
                              pretensión tanto en el ámbito civil como penal por
                              estos hechos, acogiéndose a sanciones que por
                              información falsa establezcan las leyes
                              ecuatorianas.
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
