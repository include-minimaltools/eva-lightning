import React, { useState } from "react";
import { Card, Col, List, Row, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Uni from '../../../service/Uni.service';
import { BorderOutlined, FileDoneOutlined } from "@ant-design/icons";

const { Paragraph, Title } = Typography;

export default function CourseEvaluation() {
  const [taskData, setTaskData] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const getTasks = async () => {
      const result = await Uni.GetTaskByCourse({id, type: 2});
      setTaskData(result);
    };

    getTasks();
  },[id]);

  return (
    <>
      <Row justify="start">
        <Col span={9}>
          <Card
            cover={
              <img
                src="https://i.imgur.com/5dHexMZ.gif"
                alt=""
                role="presentation"
                class="atto_image_button_text-bottom"
                width="620"
                height="340"
              />
            }
          />
        </Col>
        <Col
          span={14}
          style={{ padding: "10px", alignItems: "center", display: "flex" }}
        >
          <div>
            <Title level={4}>Estimados Estudiantes;</Title>
            <Paragraph>
              En esta parte comprobaras tus habilidades y destreza, para la
              realización de actividades evaluativas en la que se debe de
              planificar, desarrollar, entregar y resolver las asignaciones
              correspondientes al curso de {taskData?.course?.name || 'esta asignatura'}, para los futuros Ingenieros
              y Arquitectos UNI.
            </Paragraph>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          padding: '25px'
        }}
      >
        <Col flex='auto'>
          <List
            itemLayout="horizontal"
            dataSource={taskData?.tasks?.map(task => {
              return {
                title: task?.task_name,
                id_task: task?.id_task,
                description: task?.task_description,
              }
            }) || []}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Row align='middle' gutter={[20,0]}>
                      <Col>
                        <BorderOutlined style={{ fontSize:'20px' }} />
                      </Col>
                      <Col>
                        <FileDoneOutlined style={{ fontSize:'30px' }} />
                      </Col>
                    </Row>
                  }
                  title={<Link to={`/assign/${item.id_task}`}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
