import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  CalendarOutlined,
  ExperimentOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export default function LeftMenuBar() {
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
        style={{ height: "100%",  borderTopRightRadius: "15px", borderBottomRightRadius: "15px",  }}
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
          <Item key="1" icon={<BookOutlined />}>
            <Link to="/course/about/1">Curso 1</Link>
          </Item>
          <Item key="2" icon={<BookOutlined />}>
            <Link to="/course/about/1">Curso 1</Link>
          </Item>
          <Item key="3" icon={<BookOutlined />}>
            <Link to="/course/about/1">Curso 1</Link>
          </Item>
          <Item key="4" icon={<BookOutlined />}>
            <Link to="/course/about/1">Curso 1</Link>
          </Item>
        </SubMenu>
        <Item key="us" icon={<TeamOutlined />}>
          <Link to="/aboutus">¡Somos!</Link>
        </Item>
      </Menu>
    </Sider>
  );
}
