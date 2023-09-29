import { Form, Input, Col, Row } from "antd";

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
        <div className="centered-form">
          <Form
            className="GeneralInfoForm"
            name="basic"
            labelCol={{
              span: 16,
            }}
            wrapperCol={{
              span: 21,
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
                  label="Username"
                  name="username"
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
                        "username",
                        e.target.value
                      )
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                {" "}
                <Form.Item
                  label="Password"
                  name="password"
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
                        "password",
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
      </div>
    </div>
  );
};

GeneralInfoForm.propTypes = {
  formDataGeneralInfo: PropTypes.object.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
  setFormDataGeneralInfo: PropTypes.func.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
};

export default GeneralInfoForm;
