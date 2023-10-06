import { Form, Input, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../css/CIForm.css";
import { useGeneralVariables } from "../hooks/GeneralContext";

const CIForm = () => {
  const navigate = useNavigate();
  const { ChangeCIorPassport } = useGeneralVariables();

  const onFinish = (values) => {
    console.log(values);
    ChangeCIorPassport(values.cedula);
    navigate("/FormMeetClient");
  };

  return (
    <>
      <div className="container CIForm">
        <Card title=" Conozca a su Cliente " bordered={true}>
          <div className="centered-form ">
            <Form
              className="GeneralInfoForm"
              onFinish={onFinish}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Identificacion"
                name="cedula"
                rules={[
                  {
                    required: true,
                    message: "Porfavor Ingrese su identificacion",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {/* <Form.Item
                label="Anualidad"
                name="year"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input />
              </Form.Item> */}
              <Form.Item>
                <Button
                  className="custom-button"
                  type="secundary"
                  htmlType="submit"
                >
                  Enviar
                </Button>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }} />
            </Form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CIForm;
