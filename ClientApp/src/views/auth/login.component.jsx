import { Button, Card, Form, Input, message, Row, Typography } from "antd";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/my");
  }

  return (
    <Row style={BackgroundStyle} justify="center" align="middle">
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
        <Row justify='end'>
          <Button type="primary" htmlType="submit" style={{ background:'#003792', borderColor:'#003792'}}>
            Acceder
          </Button>
        </Row>
      </Form>
    </Row>
  );
}

export default Login;
