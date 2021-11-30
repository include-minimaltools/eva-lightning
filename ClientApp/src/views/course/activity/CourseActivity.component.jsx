import React, { useState } from "react";
import { List, Card, Row, Col } from "antd";
import { BorderOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Uni from "../../../service/Uni.service";

function CourseActivity() {
  const [taskData, setTaskData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getTasks = async () => {
      const result = await Uni.GetTaskByCourse({id, type: 1});
      setTaskData(result);
    };

    getTasks();
  }, [id]);

  return (
    <>
      <Card cover={<img src="https://i.imgur.com/WyRVQHX.gif" alt="" />} />
      <Row
        style={{
          padding: "25px",
        }}
      >
        <Col flex="auto">
          <List
            itemLayout="horizontal"
            dataSource={
              taskData?.tasks?.map((task) => {
                return {
                  title: task?.task_name,
                  id_task: task?.id_task,
                  description: task?.task_description,
                };
              }) || []
            }
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Row align="middle" gutter={[20, 0]}>
                      <Col>
                        <BorderOutlined style={{ fontSize: "20px" }} />
                      </Col>
                      <Col>
                        <FileDoneOutlined style={{ fontSize: "30px" }} />
                      </Col>
                    </Row>
                  }
                  title={
                    <Link to={`/assign/${item.id_task}`}>{item.title}</Link>
                  }
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

export default CourseActivity;