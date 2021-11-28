import React from "react";
import { Table, Typography, message, Row, Col, Divider } from "antd";
import { useState } from "react";
import axios from "axios";

const { Title } = Typography;

const data = [
  {
    key: "1",
    status: "Entregado",
    score: "Calificado",
    date: "2020-06-01",
    date2: "00:00:00",
    date_update: "2020-06-01",
  }
]

function AssignDetail() {
  const columns = [
    {
      title: "Estado de la entrega",
      dataIndex: "status",
      key: "status",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Estado de la calificación",
      dataIndex: "score",
      key: "score",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Fecha de entrega",
      dataIndex: "date",
      key: "date",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Tiempo restante",
      dataIndex: "date2",
      key: "date2",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Última modificación",
      dataIndex: "date_update",
      key: "date_update",
      // render: (text) => <a>{text}</a>,
    },
  ];

  const UploadFile = async (e) => {
    const File = new FormData();
    File.append("Id", 1);
    File.append("File", e.target.files[0], e.target.files[0].name);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
    // axios.post("/api/task/savefile", File, config)
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        height: "auto",
      }}
    >
      <Row>
        <Title level={2}>Trabajo 1: Descripcion del trabajo</Title>
      </Row>
      <Divider orientation="center">Detalles de la entrega</Divider>
      <Row justify="center">
        <Col>
          <Table
            columnHeader={false}
            style={{ textAlign: "center" }}
            columns={columns}
            pagination={false}
            dataSource={data}
          />
        </Col>
      </Row>
      <Divider orientation="center">Adjuntar archivo a la tarea</Divider>
      <Row justify="center" style={{marginBottom:'100px'}}>
        <Col>
          <input type="file" id="file" name="file" onChange={UploadFile}/>
        </Col>
      </Row>
    </div>
  );
}

export default AssignDetail;
