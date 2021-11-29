import React from "react";
import { Button, Card, Result } from "antd";
import { Link } from "react-router-dom";

export default function CourseLearning() {
  return (
    <>
      <Card
        style={{ borderRadius:'10px'}}
        cover={<iframe style={{ borderRadius:'10px'}} width="1264" height="720" src="https://www.youtube.com/embed/Pa_s7ogtokM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
      />
      
      <Result
        status="500"
        title="500"
        subTitle="Esta sección esta en progreso."
        extra={
          <Link to="/">
            <Button type="primary">Volver al inicio</Button>
          </Link>
        }
      />
    </>
  );
}
