import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Tree } from "antd";
import { ReadOutlined, ExperimentOutlined, FileOutlined, HomeOutlined, PartitionOutlined, TagsOutlined, NotificationOutlined, BookOutlined } from "@ant-design/icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const { DirectoryTree } = Tree;

export default function NavigationBlock({ colorFont }) {
  const navigate = useNavigate();
  const onSelect = (keys) => {
    if (keys[0] === "brands") navigate("/" + keys[0]);
    else if (keys[0] === "events") navigate("/" + keys[0]);
    else if (keys[0] === "home") navigate("/");
    else if (keys[0] === "my") navigate("/" + keys[0]);
    else if (keys[0].includes("course")) navigate("/course/about/1");
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return <Accordion
    style={{backgroundColor: "transparent", border: "none"}}
  >
    <AccordionSummary 
      styte={{backgroundColor: "transparent",}}
      >
      <Divider orientation="left" style={{ color: colorFont }}>
      <PartitionOutlined style={{ marginRight: "10px" }}/>
        Navegación
      </Divider>
    </AccordionSummary>
    <AccordionDetails>
      <DirectoryTree
        style={{ background: "transparent", color: colorFont }}
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
      />
    </AccordionDetails>
  </Accordion>;
}

// Datos de prueba
const treeData = [
  {
    title: "Inicio del sitio",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    title: "Area personal",
    key: "my",
    icon: <ExperimentOutlined />,
  },
  {
    title: "Paginas del sitio",
    key: "pages",
    icon: <FileOutlined />,
    children: [
      {
        title: "Blogs del sitio",
        key: "blogs",
        isLeaf: true,
        icon: <NotificationOutlined />
      },
      {
        title: "Marcas",
        key: "brands",
        isLeaf: true,
        icon: <TagsOutlined />
      },
    ],
  },
  {
    title: "Mis cursos",
    key: "courses",
    icon: <ReadOutlined />,
    children: [
      {
        title: "Curso 1",
        key: "course1",
        isLeaf: true,
        icon: <BookOutlined />
      },
      {
        title: "Curso 1",
        key: "course2",
        isLeaf: true,
        icon: <BookOutlined />
      },
      {
        title: "Curso 1",
        key: "course3",
        isLeaf: true,
        icon: <BookOutlined />
      },
      {
        title: "Curso 1",
        key: "course4",
        isLeaf: true,
        icon: <BookOutlined />
      },
    ],
  },
];
