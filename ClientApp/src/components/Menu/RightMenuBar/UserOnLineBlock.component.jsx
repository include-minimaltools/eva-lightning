import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Perfil from "../../../images/Perfil.jpg";
import { Fragment } from "react";
import { Avatar, Badge, Col, Divider, Row } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const colorFont = "white";

export default function UserOnlineBlock() {
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
              <UserOutlined style={{ marginRight: "10px" }} />
              Usuarios en línea
            </Divider>
          </AccordionSummary>

          <AccordionDetails>
            {names.map((item) => (<Row style={{ marginBottom: "10px" }}>
                <Badge count={1} style={{ backgroundColor: "#52c41a", color:"#52c41a"}} size='small' offset={[-3,5]}>
                  <Avatar style={{background:'white'}} alt="Perfil" src='https://joeschmoe.io/api/v1/random' size={30} />
                </Badge>
                <p style={{color:'white', marginLeft:'15px'}}>{item.name} {item.lastName}</p>
              </Row>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </Fragment>
  );
}

const names = [
  { name: 'Gabriel', lastName: 'Gonzalez' },
  { name: 'Lister', lastName: 'Ramirez' },
  { name: 'Capei', lastName: 'Gomez' },
]