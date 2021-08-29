import React, { useState } from 'react';
import { Layout, Menu, List, Button, Modal } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import styled from '@xstyled/styled-components';
import icon from '../../../../assets/nightvision-logo.svg';

const { Sider } = Layout;

const Collumn = styled.divBox`
  height: 100%;
  aside {
    height: 100%;
    background: var(--brown-1);
  }
  ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-dark {
    background: var(--brown-1);
    li.ant-list-item {
      padding: 10px;
      &.active-item {
        background-color: var(--brown-2);
        color: var(--white);
        button {
          background: var(--orange-1);
          border: none;
        }
      }
    }
  }
`;
export default function SideMenu() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Collumn>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img src={icon} alt="logo" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <List>
              <List.Item className="active-item">
                <span>New Project</span>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined />}
                  size="small"
                  onClick={showModal}
                />
              </List.Item>
            </List>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
      </Collumn>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
