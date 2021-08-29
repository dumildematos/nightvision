/* eslint-disable prettier/prettier */
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout} from 'antd';

import './App.global.css';
import SideMenu from './components/SideMenu';

const { Header, Content, Footer, Sider } = Layout;

const Hello = () => {
  return (
    <Layout>
      <SideMenu />
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
