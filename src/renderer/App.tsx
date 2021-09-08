/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Layout,  Tabs} from 'antd';

import './App.global.css';
import styled from '@xstyled/styled-components';
import SideMenu from './components/SideMenu';
import { DirProvider } from './contexts/DirContext';
import FilePreview from './components/FilePreview/FilePreview';

const { Header, Content, Footer, Sider } = Layout;

const { TabPane } = Tabs;




const Hello = () => {

  const panes: any = [];
  // newTabIndex = 0;
  const  [tabIndex, setTabIndex] = useState(0)
  const [tab, setTab] = useState({
      activeKey: panes.length > 0 ? panes[0].key : 0,
      panes,
  })

  const onChange = (activeKey: any) => {
    setTab({ activeKey , panes});
  };

  const onEdit = (targetKey: any, action: string | number) => {
    // console.log(action)
    if(action === 'remove'){
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      remove(targetKey)
      // [action](targetKey);
    }
  };

  const add = (title: string, pos: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { panes } = tab;
    // setTabIndex(tabIndex+1)
    // eslint-disable-next-line no-plusplus
    // console.log(tabIndex)
    const activeKey = `newTab${pos}`;
    // console.log(panes)
    // eslint-disable-next-line array-callback-return
    const alreadyOpened = panes.find(pane => pane.key == activeKey);
    // console.log(newTab)

    if(!alreadyOpened){
      panes.push({ title, content: <FilePreview />  , key: activeKey });
      setTab({ panes, activeKey });
    }
  }
  const remove = (targetKey: any) => {
    let { activeKey } = tab;
    let lastIndex;
    tab.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const panes = tab.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    setTabIndex(tabIndex-1)
    setTab({ panes, activeKey });
  };

  return (
    <Layout>
      <SideMenu openFile={add} tab={tab} />
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content className="main-content">
        {
          tab.panes.length > 0 &&  (
            <Tabs
            hideAdd
            onChange={onChange}
            activeKey={tab.activeKey}
            type="editable-card"
            onEdit={onEdit}
          >
            {tab.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} forceRender>
                { pane.content }
                <pre>teste</pre>
              </TabPane>
            ))}
          </Tabs>
          )
        }

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
