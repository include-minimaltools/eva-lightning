import {
  Button,
  Card,
  Form,
  Input,
  message,
  Modal,
  Result,
  Row,
  Spin,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Uni from "../../service/Uni.service";

const { Title } = Typography;
const { Item } = Form;

const BackgroundStyle = {
  backgroundColor: "#003792",
  backgroundImage: `url(https://lalupa.press/wp-content/uploads/2020/05/UNI.jpeg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
};

const FormStyle = {
  backgroundColor: "rgba(255, 255, 255, 1)",
  borderRadius: "10px",
  padding: "20px",
  margin: "20px",
};

function Login() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      localStorage.setItem("user",null);
    }
  }, []);

  const onFinish = async (values) => {
    setLoginStatus("loading");
    const { user } = await Uni.login(values);

    if (user == null) {
      setLoginStatus("error");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
    setLoginStatus("success");
    setTimeout(() => {
      setLoginStatus("");
      navigate("/");
    }, 1500);
  };

  return (
    <Row style={BackgroundStyle} justify="center" align="middle">
      <Modal
        visible={loginStatus === "success"}
        footer={null}
        closable={false}
        onCancel={() => setLoginStatus("")}
      >
        <Result
          status="success"
          title="Ha iniciado sesión correctamente"
          subTitle="Bienvenido al entorno virtual de eva"
        />
      </Modal>
      <Modal
        visible={loginStatus === "loading"}
        footer={null}
        closable={false}
        onCancel={() => setLoginStatus("")}
      >
        <Result icon={<Spin size="large" />} title="Iniciando sesión..." />
      </Modal>
      <Modal
        visible={loginStatus === "error"}
        footer={null}
        closable={false}
        onCancel={() => setLoginStatus("")}
      >
        <Result
          status="error"
          title="Email o contraseña incorreccto"
          subTitle="Intente nuevamente ingresando otra contraseña o email"
        />
      </Modal>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={FormStyle}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          Entorno Virtual de Aprendizaje
        </Title>
        <Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Por favor, ingrese su email",
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Por favor, ingrese su contraseña" },
          ]}
        >
          <Input.Password />
        </Item>
        <Row justify="end">
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#003792", borderColor: "#003792" }}
          >
            Acceder
          </Button>
        </Row>
      </Form>
    </Row>
  );
}

export default Login;
