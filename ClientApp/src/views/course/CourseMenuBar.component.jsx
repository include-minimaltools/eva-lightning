import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  ReadOutlined,
  ContainerOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

export default function CourseMenuBar({ course, section, ...props }) {
  
  return (
    <Menu selectedKeys={section} mode="horizontal" {...props}>
      <Item key="about" icon={<InfoCircleOutlined />}>
        <Link to={`/course/about/${course}`}>Acerca de</Link>
      </Item>
      <Item key="learning" icon={<ReadOutlined />}>
        <Link to={`/course/learning/${course}`}>Ruta de Aprendizaje</Link>
      </Item>
      <Item key="resource" icon={<ContainerOutlined />}>
        <Link to={`/course/resource/${course}`}>Recursos</Link>
      </Item>
      <Item key="activity" icon={<ProfileOutlined />}>
        <Link to={`/course/activity/${course}`}>Actividades</Link>
      </Item>
      <Item key="evaluation" icon={<ScheduleOutlined />}>
        <Link to={`/course/evaluation/${course}`}>Evaluaciones</Link>
      </Item>
    </Menu>
  );
}
