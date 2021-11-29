import { Col, Layout, Row, Spin } from 'antd';
import React from 'react'
import { useRoutes } from 'react-router-dom';

import Interface from './components/Interface.container';
import AboutUs from './views/about/AboutUs.component';
import AssignDetail from './views/assign/AssignDetail.component';
import Login from './views/auth/login.component';
import BrandContainer from './views/brands/Brand.container';
import CourseContainer from './views/course/Course.containter';
import Events from './views/events/Events.component';
import CourseCardContainer from './views/personal/CourseCard.container';


const { Content } = Layout;

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/', element: <Interface>
        <CourseCardContainer />
      </Interface>
    },
    {
      path: '/brands', element: <Interface>
        <BrandContainer/>
      </Interface>
    },
    {
      path: '/aboutus', element: <Interface>
        <AboutUs/>
      </Interface>
    },
    {
      path: '/my', element: <Interface>
        <CourseCardContainer />
      </Interface>
    },
    {
      path: '/assign/:id', element: <Interface>
        <AssignDetail />
      </Interface>
    },
    {
      path: '/course/:section/:id', element: <Interface><CourseContainer/></Interface>
    },
    {
      path: '/login', element: <Login/>
    },
    {
      path: '/events', element: <Interface><Events/></Interface>
    },
    {
      path: '*', element: <Interface >
        <Content

          style={{
            height: '100%',
            textAlign: 'center',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '10px',
            padding: '10px'
          }}
        >
          <Col>
            <Row justify='center'>
              <Spin size="large" />
            </Row>
            <Row>
              <h1>In progress</h1>
            </Row>
          </Col>
        </Content>
      </Interface>
    },
  ]);

  return routes;
}
