import { Divider, Row, Col, Card, Typography } from "antd";
import React from "react";
import Obed from "../../images/avatar-obed.jpg";
import Luis from "../../images/avatar-luis.jpg";
import Engel from "../../images/avatar-engel.jpg";
import Aliz from "../../images/avatar-aliz.jpg";

const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;

export default function AboutUs() {
  return (
    <div
      style={{
        padding: "20px",
        height: "max",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <Row>
        <Divider orientation="center">
          <Title>¿Quienes somos?</Title>
        </Divider>
      </Row>
      <Row justify='space-around'>
        <Col>
          <Card
            hoverable
            onClick={() => {
              window.open("https://www.facebook.com/obedisai.riossolano");
            }}
            style={{ width: 275, textJustify: "end" }}
            cover={<img alt="imagen" src={Obed} />}
          >
            <Meta
              title="Obed Isaí Ríos Solano"
              description={<p>Departamento de Investigación 2020 - 0331U</p>}
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=100008202189282"
              );
            }}
            style={{ width: 275, textJustify: "end" }}
            cover={<img alt="imagen" src={Luis} />}
          >
            <Meta
              title="Lic. Luis Miguel Pineda Joseph"
              description={<p>Departamento de Administración 2020 - 0251U</p>}
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            onClick={() => {
              window.open("https://www.facebook.com/engel.reyes.54");
            }}
            style={{ width: 275, textJustify: "end" }}
            cover={<img alt="imagen" src={Engel} />}
          >
            <Meta
              title="Engel Gabriel Reyes Moreno"
              description={<p>Departamento de Diseño 2020 - 0505U</p>}
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            onClick={() => {
              window.open("https://www.facebook.com/gabriel.ortiz.amador");
            }}
            style={{ width: 275, textJustify: "end" }}
            cover={<img alt="imagen" src={Aliz} />}
          >
            <Meta
              title="Gabriel Alejandro Ortiz Amador"
              description={<p>Departamento de Desarrollo 2020 - 0325U</p>}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ padding: "0 50px 0 50px" }}>
        <Paragraph>
          Nosotros somos un grupo de estudiantes que actualmente cursan el 4to
          semestre de la carrera de Ingeniería en Computación en la Universidad
          Nacional de Ingeniería. Nuestro proyecto se basa en la creación de una
          plataforma que permita a los estudiantes de la Universidad Nacional de
          Ingeniería, realizar sus actividades de investigación y desarrollo en
          la Universidad Nacional de Nicaragua.
        </Paragraph>
      </Row>
      <Row>
        <Divider orientation="center">
          <Title>Motivación</Title>
        </Divider>
      </Row>
      <Row
        style={{ padding: "0 50px 0 50px" }}
        justify="center"
        gutter={[100, 0]}
      >
        <Col span={8}>
          <Paragraph>
            La falta de herramientas con la suficiente capacidad de suplir las
            necesidades tanto de los estudiantes como de los mismos profesores
            de la Universidad Nacional de Ingeniería de forma satisfactoria, nos
            ha llevado a crear una plataforma de entorno virtual de aprendizaje
            con tecnologías web más recientes como lo es React.js, Node.js,
            Aspnet, entre otras.
          </Paragraph>
        </Col>
        <Col span={8}>
          <Paragraph>
            Se ha logrado observar tanto nosotros como estudiantes como a los
            demás profesores que la plataforma actual del EVA es de gran
            utilidad para la investigación y desarrollo de los estudiantes. Sin
            embargo sus tiempos de carga y otras debilidades del diseño e
            integración con la Universidad Nacional de Ingeniería nos han
            llevado a crear una plataforma mucho más ligera y rápida al momento
            de realizar cambios de pantalla.
          </Paragraph>
        </Col>
        <Col span={8}>
          <Paragraph>
            Dichos objetivos se han conseguido mediante la utilización de cargas
            asíncronas de la información, tecnologías que ofrecen los lenguajes
            de javascript, y que es muy dificil de implementar en otros
            lenguajes para plataformas web más antiguos, como lo es PHP. Es así
            como nace la idea de crear:
          </Paragraph>
          <Title level={3}>EVA Lightning</Title>
        </Col>
      </Row>
    </div>
  );
}
