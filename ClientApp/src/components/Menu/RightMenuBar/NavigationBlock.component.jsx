import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Tree } from "antd";
import { ReadOutlined, ExperimentOutlined, FileOutlined, HomeOutlined, PartitionOutlined, TagsOutlined, NotificationOutlined, BookOutlined } from "@ant-design/icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Uni from "../../../service/Uni.service";

const { DirectoryTree } = Tree;

export default function NavigationBlock({ colorFont }) {  
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const courses = await Uni.getCourses();
    setCourses(courses);
  };

  useEffect(() => {
    getCourses();
  },[]);

  const onSelect = (keys) => {
    if (keys[0] === "brands") navigate("/" + keys[0]);
    else if (keys[0] === "events") navigate("/" + keys[0]);
    else if (keys[0] === "home") navigate("/");
    else if (keys[0] === "my") navigate("/" + keys[0]);
    else if (keys[0].includes("course")) navigate("/course/about/" + keys[0].split("-")[1]);
  };

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
      children: courses.map((course) => {
        return {
          title: course.name,
          key: "course-"+course.id_course,
          isLeaf: true,
          icon: <BookOutlined />
        }
      })
    },
  ];
  

  const onExpand = () => {
    
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