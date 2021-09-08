/* eslint-disable prettier/prettier */
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout} from 'antd';

import './App.global.css';
import styled from '@xstyled/styled-components';
import SideMenu from './components/SideMenu';
import { DirProvider } from './contexts/DirContext';
import FilePreview from './components/FilePreview/FilePreview';

const { Header, Content, Footer, Sider } = Layout;



const Hello = () => {
  return (
    <Layout>
      <SideMenu />
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content className="main-content">
          <FilePreview />
        {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        </div> */}
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
  );
};

export default function App() {
  return (
    <DirProvider>
      <Router>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </Router>
    </DirProvider>
  );
}
