import React, { useState } from "react";
import { Layout, Breadcrumb, Affix, Button, Col, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "../App.css";

import LeftMenuBar from "./Menu/LeftMenuBar.component";
import RightMenuBar from "./Menu/RightMenuBar.component";
import TopMenuBar from "./Menu/TopMenuBar.component";

const { Footer, Content } = Layout;
const { Item } = Breadcrumb;

function Interface({ children }) {
  const [isVisibleRightBar, setIsVisibleRightBar] = useState(false);
  const [isImageRightBar, setIsImageRightBar] = useState(false);

  return (
    <Layout style={{height:'100%'}}>
      <TopMenuBar rightMenu={() => setIsVisibleRightBar(!isVisibleRightBar)} imageRightMenu={() => setIsImageRightBar(!isImageRightBar)}/>
      <Layout style={{height:'100%', background:'#F5F0F3' }}>
        <LeftMenuBar />
        <Layout style={{height:'100%', padding: "0 24px 24px"}}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Item>Home</Item>
            <Item>List</Item>
            <Item>App</Item>
          </Breadcrumb> */}
          <Content style={{ marginTop:'1rem', height:'100%', width:'100%', overflowY:'scroll'}}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Eva Lightning ©2021 Created by Minimal Tools Team
          </Footer>
        </Layout>
        <RightMenuBar collapsed={!isVisibleRightBar} isImageRightBar={isImageRightBar}/>
      </Layout>
    </Layout>
  );
}

export default Interface;
