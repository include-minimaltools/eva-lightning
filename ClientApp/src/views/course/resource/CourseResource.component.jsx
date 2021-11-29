import React from "react";
import { List, Avatar, Card, Row, Col, Divider, Typography } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ResourceBackground from "../../../images/svgs/ResourceBackground";

const { Title, Paragraph } = Typography;

function CourseResource() {
  return (
    <div style={{ padding: "15px" }}>
      <Row>
        <Col span={12}>
          <Card cover={<ResourceBackground />} />
        </Col>
        <Col
          span={10}
          style={{ padding: "10px", alignItems: "center", display: "flex" }}
        >
          <div>
            <Title level={4}>Estimados Estudiantes;</Title>
            <Paragraph>
              Para el curso, deberás estudiar Material Básico, ver
              los vídeos básicos y realizar los Ejercicios que se encuentran en
              la sección de Actividades y de ser requerido entregar en el
              apartado de evaluación. Saludos.
            </Paragraph>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Material Básico</Divider>
      <Row
        style={{
          padding: "25px",
        }}
      >
        <Col flex="auto">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{ background: "transparent" }}
                      icon={<FilePdfOutlined style={{ color: "blue" }} />}
                    />
                  }
                  title={<Link to="/assign/1">{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Divider orientation="left">Videos Básicos</Divider>
      <Divider orientation="left">Material Complementario</Divider>
    </div>
  );
}

export default CourseResource;

const data = [
  {
    title: "Documento",
    description: "Descripcion",
  },
  {
    title: "Documento",
    description: "Descripcion",
  },
  {
    title: "Documento",
    description: "Descripcion",
  },
  {
    title: "Documento",
    description: "Descripcion",
  },
  {
    title: "Documento",
    description: "Descripcion",
  },
  {
    title: "Documento",
    description: "Descripcion",
  },
];
