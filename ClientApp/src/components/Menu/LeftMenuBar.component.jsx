import React, { useEffect, useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  CalendarOutlined,
  ExperimentOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Uni from "../../service/Uni.service";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export default function LeftMenuBar() {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const courses = await Uni.getCourses();
    setCourses(courses);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sider
      style={{ backgroundColor: "#F3F0F5" }}
      width={200}
      height="100%"
      // className="site-layout-background"
      collapsed={isCollapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: isCollapsed ? "center" : "right",
            padding: "1rem",
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuOutlined />
        </div>
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Inicio</Link>
        </Item>
        <Item key="my" icon={<ExperimentOutlined />}>
          <Link to="/my">Area Personal</Link>
        </Item>
        <Item key="events" icon={<CalendarOutlined />}>
          <Link to="/events">Eventos</Link>
        </Item>
        <SubMenu key="sub1" icon={<ReadOutlined />} title="Mis Cursos">
          {courses.map((course, index) => {
            return (
              <Item key={index} icon={<BookOutlined />}>
                <Link to={`/course/about/${course.id_course}`}>
                  {course.name}
                </Link>
              </Item>
            );
          })}
        </SubMenu>
        <Item key="us" icon={<TeamOutlined />}>
          <Link to="/aboutus">¡Somos!</Link>
        </Item>
        <Item key="us" icon={<ExportOutlined />}>
          <Link to="/login">Cerrar Sesión</Link>
        </Item>
      </Menu>
    </Sider>
  );
}
