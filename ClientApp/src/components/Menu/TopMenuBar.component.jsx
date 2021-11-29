import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Layout, Avatar, message } from "antd";
import { UserOutlined, MessageFilled, BellFilled } from "@ant-design/icons";

import logo from '../../images/logoUNI.png';
import background from '../../images/RLP-background.png';
import { ImageOutlined, MenuOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const leftElementsStyle = { 
  height: "40px", 
  alignItems: "center", 
  display: "flex" 
}

export default function TopMenuBar({ rightMenu, imageRightMenu }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const validateSession = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) 
    {
      message.error("No se ha iniciado sesión");
      navigate("/login");
    }
    setUserData(user);
  };

  useEffect(()=>{
    validateSession();
  },[]);

  return (
    <Header
      className="header"
      style={{ backgroundColor: "#003792", 
      backgroundImage: `url(${background})`, 
      height: "74px" }}
    >
      <Row>
        <Col>
          <Row style={{ height: "100%" }} align='middle'>
            <img style={{ borderRadius:'0px' }} src={logo}></img>
          </Row>
        </Col>
        <Col flex="auto">
          <Row
            justify="end"
            align="top"
            gutter={[15, 0]}
          >
            <Col style={leftElementsStyle}>
              <MessageFilled style={{ fontSize: "18px", color: "white" }} />
            </Col>
            <Col style={leftElementsStyle}>
              <BellFilled style={{ fontSize: "20px", color: "white" }} />
            </Col>
            <Col style={leftElementsStyle}>
              <Text style={{ color: "white", cursor:'pointer' }}>{userData?.name} {userData?.lastname}</Text>
            </Col>
            <Avatar icon={<UserOutlined />} style={{ margin: "5px" }} />
          </Row>
          <Row
            justify="end"
            align="bottom"
            gutter={[15, 0]}
          >
              <MenuOutlined style={{ fontSize: "28px", color: "white", marginRight:'20px', cursor:'pointer' }} onClick={rightMenu} />
              <ImageOutlined style={{ fontSize: "28px", color: "white", cursor:'pointer' }} onClick={imageRightMenu}/>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}