import React from "react";
import { Divider } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { EllipsisOutlined, FolderOutlined, MenuOutlined } from "@ant-design/icons";

export default function PrivateFileBlock({ colorFont }) {
  return (
    <Accordion
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "left",
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Divider orientation="left" style={{ color: "white" }}>
          <FolderOutlined style={{ marginRight: "10px" }} />
          Archivos Privados
        </Divider>
      </AccordionSummary>

      <AccordionDetails style={{ marginLeft: "50px" }}>
        <Typography>No hay archivos privados</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
