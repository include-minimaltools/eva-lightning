import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  SettingOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

export default function CourseMenuBar({ course, section, ...props }) {
  return (
    <Menu defaultValue={section} mode="horizontal" {...props}>
      <Item key="about" icon={<MailOutlined />}>
        <Link to={`/course/about/${course}`}>Acerca de</Link>
      </Item>
      <Item key="learning" icon={<AppstoreOutlined />}>
        <Link to={`/course/learning/${course}`}>Ruta de Aprendizaje</Link>
      </Item>
      <Item key="resource" icon={<AppstoreOutlined />}>
        <Link to={`/course/resource/${course}`}>Recursos</Link>
      </Item>
      <Item key="activity" icon={<AppstoreOutlined />}>
        <Link to={`/course/activity/${course}`}>Actividades</Link>
      </Item>
      <Item key="evaluation" icon={<AppstoreOutlined />}>
        <Link to={`/course/evaluation/${course}`}>Evaluaciones</Link>
      </Item>
    </Menu>
  );
}
