import React from "react";
import { Table, Typography, Row, Col, Divider } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import Uni from "../../service/Uni.service";
import { useParams } from "react-router-dom";
import moment from "moment";

const { Title } = Typography;

function AssignDetail() {
  const { id } = useParams();
  const [taskData, setTaskData] = useState();
  const [deliveryDate, setDeliveryDate] = useState(new moment());
  const [dateUpdate, setDateUpdate] = useState(new moment());
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await Uni.GetTaskById(id);
      console.log(fetch);
      const delivery = new moment(fetch?.task_delivery_date); 

      setTaskData(fetch);
      setDeliveryDate(delivery);
      setDateUpdate(new moment());

      const nowDate = new moment();
      setTime(delivery.diff(nowDate, "hours"));
    };

    fetchData();
  }, [id]);

  const data = [
    {
      key: "1",
      status: "Entregado",
      score: "Calificado",
      date: deliveryDate.format("DD/MM/YYYY"),
      date2: time,
      date_update: dateUpdate.format("DD/MM/YYYY"),
    },
  ];

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
      render: (time) => <Row style={{ background: time < 0 && 'red', color: time < 0 && 'white', borderRadius:'10px', justifyContent:'center' }}>{time} horas</Row>,
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
    };
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
        <Title level={2}>
          {taskData?.task_name}: {taskData?.task_description}
        </Title>
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
      <Row justify="center" style={{ marginBottom: "100px" }}>
        <Col>
          <input type="file" id="file" name="file" />
        </Col>
      </Row>
    </div>
  );
}

export default AssignDetail;
