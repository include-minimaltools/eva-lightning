import React, { useEffect,useState } from "react";
import { Col, Row, Card } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import { useParams,useNavigate } from "react-router-dom";
import CourseBackground from "../../images/svgs/CourseBackground";
import CourseAbout from "./about/CourseAbout.component";
import CourseActivity from "./activity/CourseActivity.component";
import CourseMenuBar from "./CourseMenuBar.component";
import CourseEvaluation from "./evaluation/CourseEvaluation.component";
import CourseLearning from "./learning/CourseLearning.component";
import CourseResource from "./resource/CourseResource.component";
import Uni from "../../service/Uni.service";
import { message } from 'antd';

export default function CourseContainer() {
  const [aboutData, setAboutData] = useState([]);
  const { section, id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    if (id === null) return;
    const data = await Uni.GetCareer(id);

    if (data === null) {
      message.error("No se pudo cargar la información de la clase");
      navigate('/');
    }

    setAboutData(data);
    message.success("Success");
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <Col>
      <Row>
        <Card style={{ width: 900, bordarRadius: "10px" }}>
          <nav>
            <QuestionOutlined style={{ padding: 10 }} />

            <icon type="QuestionOutlined" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Avisos y novedades generales
            </a>
          </nav>
          <CourseBackground course={aboutData.course_name} career={aboutData.career_name}/>
        </Card>
      </Row>
      <Row
        style={{
          background: "white",
          borderRadius: "10px",
          width: "max",
          margin: "1rem 0 1rem 0",
        }}
      >
        <CourseMenuBar
          course={id}
          section={section}
          style={{ backgroundColor: "transparent" }}
        />
      </Row>
      <Row
        style={{ background: "white", borderRadius: "10px" }}
      >
        <Col flex="auto">
          {section === "about" && <CourseAbout id={id} />}
          {section === "activity" && <CourseActivity id={id} />}
          {section === "learning" && <CourseLearning id={id} />}
          {section === "resource" && <CourseResource id={id} />}
          {section === "evaluation" && <CourseEvaluation id={id} />}
        </Col>
      </Row>
    </Col>
  );
}
