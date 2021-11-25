import React from "react";
import { Table, Typography } from "antd";
const { Title } = Typography;

function AssignDetail() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
  ];

  return (
    <div>
      <Title>Trabajo 1: Descripcion del trabajo</Title>
      <Table
        columnHeader={false}
        style={{ textAlign: "center" }}
        columns={columns}
        // dataSource={data}
        // title={() => <h4>{CourseName}</h4>}
      />
    </div>
  );
}

export default AssignDetail;
