import React, { Component } from "react";
import CourseCard from "./CourseCard.component";
import "./css/CourseCards.css";
import { Col, Row } from 'antd'

const data = [
  {
    carrer: "Ingeniería en Sistemas Computacionales",
    course: "Matematicas",
    group: "Grupo 1",
    semester: "Semestre 1",
    year: "Año 1",
  },
  {
    carrer: "Ingeniería en Sistemas Computacionales",
    course: "Fisica",
    group: "Grupo 1",
    semester: "Semestre 1",
    year: "Año 1",
  },
  {
    carrer: "Ingeniería en Quimica",
    course: "Geometria",
    group: "Grupo 1",
    semester: "Semestre 1",
    year: "Año 1",
  }
]

export default function CourseCardContainer() {
  return (<div style={{ background:'white', borderRadius:'10px', padding:'8px 0 4px 8px', width:'max', justifyContent:'center'}}>
    <Row>
      <h2>Cursos a los que se ha accedido recientemente</h2>
    </Row>
    <Row justify="center">{ data.map(item => <>
      <Col>
        <CourseCard
          career={item.carrer}
          course={item.course}
          group={item.group}
          semester={item.semester}
          year={item.year}
        />
      </Col>
    </>)}
    </Row>
  </div>);
}
