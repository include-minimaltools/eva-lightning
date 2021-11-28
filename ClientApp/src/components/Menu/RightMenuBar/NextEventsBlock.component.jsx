import React from "react";
import { Divider } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { EllipsisOutlined } from "@ant-design/icons";

export default function NextEventsBlock({ colorFont }) {
  return (
    <Accordion
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "left",
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Divider orientation="left" style={{ color: colorFont }}>
          <EllipsisOutlined style={{ marginRight: "10px" }} />
          Próximos eventos
        </Divider>
      </AccordionSummary>

      <AccordionDetails style={{ marginLeft: "50px" }}>
        <Typography>No hay eventos proximos</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
