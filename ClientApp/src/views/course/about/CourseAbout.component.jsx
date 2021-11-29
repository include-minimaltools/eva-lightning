import React, { useState, useEffect } from "react";
import { useParams,useNavigate} from "react-router-dom";

import { Card } from "antd";
import { InfoCircleOutlined, EyeOutlined } from "@ant-design/icons";
import { Table } from 'antd';
import {message} from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import Uni from "../../../service/Uni.service";


export default function CourseAbout() {
  const parapraph = (text) => {
    return <p style={{ margin: "1.6rem", sizes: "2rem" }}> {text}</p>;
  };
  const TeacherName = (text) => {
    return <h4 style={{ fontFamily: "Helvetica", marginTop: "5rem" }}>{text}</h4>
  }

  const [aboutData, setAboutData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    if(id === null) return;
    const data = await Uni.GetCareer(id);

    if(data === null)
    {
      message.error("No se pudo cargar la información de la clase");
      navigate('/');
    }

    setAboutData(data);
    message.success("Success");
  };

  useEffect(() => {
    getData();
  },[])

  const About = "Mi experiencia profesional abarca prácticamente todas las asignaturas de XXX. Además de haber ejercido funciones de docencia desde el año XXX. En esta parte la docente puede realizar un breve resumen de su vida académica en la Universidad Nacional de Ingeniería"
  const Objetive = "Describe con objetividad y claridad los resultados del aprendizaje a alcanzar por parte del estudiante. Estos se centran en el comportamiento, es decir, detallan y establecen las habilidades y destreza que los estudiantes deben ser capaces de realizar o lograr al final del curso. Establecer un objetivo y una meta clara logra dos fines fundamentales. En primer lugar, los alumnos sabrán por qué el curso es importante y cómo éste les ayudará en el futuro. En segundo lugar, los objetivos ayudan a mantener enfocado el contenido del curso."
  const ClassRoom = "B-II-1"
  const TableColor = "#F5E769"

  const columns = [
    {
      textAlign: "center",
      title: 'Acerca del docente',
      dataIndex: 'about',
      sizes: '8rem',
      align: 'justify',

    },
    {
      textAlign: 'center',
      title: 'Objetivo del docente en el curso',
      dataIndex: 'objetive',
      align: 'justify',
      sizes: '8rem'
    },

  ];

  const data = [
    {
      textAlign: 'center',
      key: '1',
      about: About,
      objetive: Objetive
    },


  ];

  const columns2 = [
    {
      textAlign: "center",
      title: 'FACULTAD:',
      dataIndex: 'facultad',
      sizes: '0rem',
      align: 'justify',

    },
    {
      textAlign: 'center',
      title: aboutData.faculty_name,
      dataIndex: 'fec',
      align: 'justify',
      sizes: '0rem'
    },
    {
      textAlign: 'center',
      title: 'GRUPO:',
      dataIndex: 'grupo',
      align: 'justify',
      sizes: '0rem'
    },


  ];

  const data2 = [
    {
      textAlign: 'center',
      key: '1',
      facultad: 'CARRERA:',
      fec: aboutData.campus_name,
      grupo: aboutData.groups,
    },
    {
      textAlign: 'center',
      key: '1',
      facultad: 'DOCENTE:',
      fec: aboutData.teacher_name,
      grupo: 'AULA'
    },
    {
      textAlign: 'center',
      key: '1',
      facultad: 'SEMESTRE:',
      fec: "Semestre "+ aboutData.semester+" del 2021",
      grupo: ClassRoom
    },
  ];

  const pagination = { position: 'bottom' };

  const state = {
    pagination,
    top: 'none',
    bottom: 'none',
  }

  const BlueUni = "#045FBD";
  return (

    <div
      style={{
        height: "100%",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <Card
        style={{
          width: "18rem",
          height: "5rem",
          borderRadius: "1rem",
          backgroundColor: "#045FBD",
          margin: "1rem",
        }}
      >
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "white",
            borderRadius: "3rem",
            float: "left",
            padding: "0.3rem",
            paddingLeft: "0.3rem",
            marginRight: "1rem",
          }}
        >
          <InfoCircleOutlined style={{ fontSize: "1.4rem" }} />
        </div>

        <h3
          style={{
            float: "left",
            marginLeft: "21px",
            margin: "0.2rem",
            color: "white",
          }}
        >
          Información del curso
        </h3>
      </Card>
      {parapraph(
        "Estimados estudiantes:\n  Bienvenidos al curso FISICA I en su Entorno Virtual de Aprendizaje EVA, que la Universidad Nacional de Ingeniería pone a tu disposición en el proceso de aprendizaje con el aprovechamiento de las Tic. En el curso aprenderás… para dar cumplimientos de los objetivos…"
      )}

      <Card
        style={{
          width: "13rem",
          height: "5rem",
          borderRadius: "1rem",
          backgroundColor: "#045FBD",
          margin: "1rem",
        }}
      >
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "white",
            borderRadius: "3rem",
            float: "left",
            padding: "0.3rem",
            paddingLeft: "0.3rem",
            marginRight: "1rem",
          }}
        >
          <EyeOutlined style={{ fontSize: "1.4rem" }} />
        </div>

        <h3
          style={{
            float: "left",
            marginLeft: "21px",
            margin: "0.2rem",
            color: "white",
          }}
        >
          Objetivos
        </h3>
      </Card>
      {parapraph(
        "En este apartado el profesor deberá agregar el objetivo general y los específicos del programa de asignatura FISICA I General Contenido del objetivo…. Objetivos Específicos \n Contenido de los objetivos…"
      )}

      <div
        style={{ marginLeft: "1rem", float: "left", marginRight: "2rem", backgroundColor: BlueUni, borderRadius: "4rem", width: "8rem", height: '8rem', padding: "0.5rem" }}
      >
        <PersonIcon style={{ fontSize: "7rem", color: "#7F7F7F" }} ></PersonIcon>
      </div>

      {TeacherName(aboutData.teacher_name)}
      <div style={{ width: "30rem" }}>
        <Table
          {...state}
          pagination={{ position: [state.top, state.bottom] }}
          style={{ textAlign: "center" }}
          columns={columns}
          dataSource={data}
          title={() => <h4>{aboutData.course_name}</h4>}
        />
      </div>
      {/* <AboutCourseBackground/> */}



      <div style={{ width: "30rem", margionTop: "2rem" }}>
        <Table
          {...state}
          pagination={{ position: [state.top, state.bottom] }}
          style={{ textAlign: "center", fontWeight: "bold" }}
          bordered
          columns={columns2}
          dataSource={data2}
          title={() => <h4>{aboutData.campus_name}</h4>}
          backgroundColor={TableColor}
        />
      </div>
    </div>
  );
}
