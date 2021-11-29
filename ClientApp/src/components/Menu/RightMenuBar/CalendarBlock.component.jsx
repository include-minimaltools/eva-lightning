import React from "react";
import { Divider } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CalendarOutlined } from "@ant-design/icons";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

export default function CalendarBlock() {
  return (
    <Accordion
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "left",
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Divider orientation="left" style={{ color: "White" }}>
          <CalendarOutlined style={{ marginRight: "10px" }} />
          Calendario
        </Divider>
      </AccordionSummary>

      <AccordionDetails style={{ overflowY:'scroll', scrollbarWidth:'2px' }}>
        <div className="site-calendar-demo-card">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
