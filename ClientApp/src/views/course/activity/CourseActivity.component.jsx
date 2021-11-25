import React, { useState } from "react";
import { List, Avatar, Card } from "antd";
import { FileWordFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

function CourseActivity() {
  return (
    <>
      <Card cover={<img src="https://i.imgur.com/WyRVQHX.gif" alt="" />} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{background:"transparent"}} icon={<FileWordFilled style={{color:"blue"}}/>} />}
              title={<Link to="/assign/1">{item.title}</Link>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default CourseActivity;

const data = [
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
  {
    title: "Tarea Trabajo Actividad",
    description: "Descripcion"
  },
];
