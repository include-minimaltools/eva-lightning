import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard.component";
import "./css/CourseCards.css";
import { Col, Row } from 'antd'
import Uni from "../../service/Uni.service";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

export default function CourseCardContainer() {


  const [aboutData, setAboutData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    
    const data = await Uni.GetInfo();

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




  return (<div style={{ background: 'white', borderRadius: '10px', padding: '8px 0 4px 8px', width: 'max', justifyContent: 'center' }}>
    <Row>
      <h2>Cursos a los que se ha accedido recientemente</h2>
    </Row>
    <Row justify="center">{aboutData.map(item => <>
      <Col>
        <CourseCard
          career={item?.career_name}
          course={item?.course_name}
        />
      </Col>
    </>)}
    </Row>
  </div>);
}
