import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Perfil from "../../../images/Perfil.jpg";
import { Fragment } from "react";
import { Avatar, Col, Divider, Row } from "antd";
import {
  CloudFilled,
  MailFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const colorFont = "white";

export default function MicrosoftBlock() {
  return (
    <Fragment>
      <div>
        <Accordion
          style={{
            backgroundColor: "transparent",
            color: "white",
            textAlign: "left",
          }}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Divider orientation="left" style={{ color: colorFont }}>
              <MenuOutlined style={{ marginRight: "10px" }} />
              Microsoft
            </Divider>
          </AccordionSummary>

          <AccordionDetails>
            <Row justify="center">
              <Avatar alt="Perfil" src={Perfil} size={100} />
            </Row>
            <Row style={{ marginBottom: "30px" }} gutter={[10,0]} justify="center">
              <Col>
                <Typography>Obed Miguel You are currently</Typography>
              </Col>
              <Col>
                <Typography style={{ color: "green" }}>CONNECTED</Typography>
              </Col>
              <Col><Typography>to Microsoft 365</Typography></Col>
            </Row>

            <Row
              gutter={[16, 0]}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => {
                window.open("https://mail.google.com/mail/u/0");
              }}
            >
              <Col>
                <MailFilled style={{ fontSize: "27px" }} />
              </Col>
              <Col style={{ alignItems: "center", display: "flex" }}>
                <div>My Email</div>
              </Col>
            </Row>
            <Row
              gutter={[16, 0]}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => window.open("https://onedrive.live.com/")}
            >
              <Col>
                <CloudFilled style={{ fontSize: "30px" }} />
              </Col>
              <Col style={{ alignItems: "center", display: "flex" }}>
                <div>My OneDrive</div>
              </Col>
            </Row>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fragment>
  );
}

const imageStyle = {
  padding: "2.5px",
  background: "transparent",
  marginRight: "10px",
};
