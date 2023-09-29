import { Form, Input, Card } from "antd";

import "../css/GeneralInfoForm.css";
import PropTypes from "prop-types"; // Importa PropTypes

const MoneyInfoForm = ({ setFormDataMoneyInfo, formDataMoneyInfo }) => {
  const handleInputChangeGeneralInfoForm = (fieldName, value) => {
    // Actualizar el objeto formData con el nuevo valor
    setFormDataMoneyInfo({
      ...formDataMoneyInfo,
      [fieldName]: value,
    });
  };
  return (
    <div>
      {" "}
      <div className="container">
        <Card title="2 - Informacion Financiera" bordered={true}>
          <div className="centered-form">
            <Form
              className="GeneralInfoForm"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Mensualidad"
                name="month"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleInputChangeGeneralInfoForm("month", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                label="Anualidad"
                name="year"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleInputChangeGeneralInfoForm("year", e.target.value)
                  }
                />
              </Form.Item>

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

MoneyInfoForm.propTypes = {
  formDataMoneyInfo: PropTypes.object.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
  setFormDataMoneyInfo: PropTypes.func.isRequired, // Asegúrate de que formData sea un objeto y sea requerido
};

export default MoneyInfoForm;
