import { Space, Spin } from "antd";
import "../css/Spinner.css";

const Spinner = () => {
  return (
    <div className="container">
      <Space
        direction="vertical"
        style={{
          width: "200%",
        }}
      >
        <Space>
          <Spin tip="Cargando..." size="large">
            <div className="content" />
          </Spin>
        </Space>
      </Space>
    </div>
  );
};

export default Spinner;
