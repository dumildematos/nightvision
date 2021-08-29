import React, { useState } from 'react';
import {
  Layout,
  Menu,
  List,
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Row,
  Col,
  Select,
  message,
  Upload,
} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import styled from '@xstyled/styled-components';
import icon from '../../../../assets/nightvision-logo.svg';
import FirefoxIcon from '../../../../assets/Firefox_Logo_2017.png';
import ChromeIcon from '../../../../assets/1200px-Google_Chrome_icon.svg.png';
import EdgeIcon from '../../../../assets/Microsoft_Edge_logo.svg.png';
import SafariIcon from '../../../../assets/safari_icon_large_2x.png';

const { Sider } = Layout;
const { Option } = Select;

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

const ModalStyled = styled(Modal)`
  .ant-modal-content,
  .ant-modal-header,
  .ant-modal-footer {
    background: var(--black-1);
    border: none;
    color: var(--white);
  }
  .ant-modal-title,
  .ant-modal-close {
    color: var(--white);
  }
  .ant-modal-close:hover {
    color: var(--orange-1);
  }
  .ant-modal-footer button,
  .ant-modal-footer button:hover {
    border: 1px solid var(--orange-1);
    background: var(--black-1);
    color: var(--white);
  }
  .ant-modal-footer button.ant-btn.ant-btn-primary,
  .ant-upload.ant-upload-select.ant-upload-select-text button {
    background: var(--orange-1);
    border: none;
  }
  .ant-modal-body {
    form {
      .ant-col.ant-form-item-label label {
        color: var(--white);
      }
      input.ant-input,
      .ant-select-selector {
        background: var(--black-1);
        border: 1px solid var(--orange-1);
        color: var(--white-2);
      }
      span.anticon.anticon-down.ant-select-suffix {
        color: var(--white-2);
      }
    }
  }
`;

type RequiredMark = boolean | 'optional';

export default function SideMenu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional');
  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const upLoadProps = {
    beforeUpload: (file: { type: string; name: any }) => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: (info: { fileList: any }) => {
      console.log(info.fileList);
    },
  };

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

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
      <ModalStyled
        title="Project Configuration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Project Name"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="Project name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nightwatch Version">
                <Select placeholder="Nightwatcth.js version">
                  <Select.Option value="1.7.8">Latest (1.7.8) </Select.Option>
                  <Select.Option value="1.7.7">v1.7.7</Select.Option>
                  <Select.Option value="1.7.5">v1.7.5</Select.Option>
                  <Select.Option value="1.7.3">v1.7.3</Select.Option>
                  <Select.Option value="1.7.2">v1.7.2-beta</Select.Option>
                  <Select.Option value="1.7.0">v1.7.0-beta</Select.Option>
                  <Select.Option value="1.6.4">v1.6.4</Select.Option>
                  <Select.Option value="1.6.3">v1.6.3</Select.Option>
                  <Select.Option value="1.6.2">v1.6.2</Select.Option>
                  <Select.Option value="1.6.1">v1.6.1</Select.Option>
                  <Select.Option value="1.6.0">v1.6.0</Select.Option>
                  <Select.Option value="1.5.1">v1.5.1</Select.Option>
                  <Select.Option value="1.5.0">v1.5.0</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="WebDriver">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Select WebDriver"
                  defaultValue={['GeckoDriver']}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="GeckoDriver" label="GeckoDriver">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="GeckoDriver">
                        <img
                          width="16"
                          height="16"
                          alt="Mozilla Firefox"
                          src={FirefoxIcon}
                          style={{ marginRight: '10px' }}
                        />
                      </span>
                      GeckoDriver
                    </div>
                  </Option>
                  <Option value="ChromeDriver" label="ChromeDriver">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="ChromeDriver">
                        <img
                          width="16"
                          height="16"
                          alt="ChromeDriver"
                          src={ChromeIcon}
                          style={{ marginRight: '10px' }}
                        />
                      </span>
                      ChromeDriver
                    </div>
                  </Option>
                  <Option value="EdgeDriver" label="EdgeDriver">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="EdgeDriver">
                        <img
                          width="16"
                          height="16"
                          alt="Mozilla Firefox"
                          src={EdgeIcon}
                          style={{ marginRight: '10px' }}
                        />
                      </span>
                      Microsoft Edge Driver
                    </div>
                  </Option>
                  <Option value="SafariDriver" label="SafariDriver">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="SafariDriver">
                        <img
                          width="16"
                          height="16"
                          alt="Mozilla Firefox"
                          src={SafariIcon}
                          style={{ marginRight: '10px' }}
                        />
                      </span>
                      SafariDriver
                    </div>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Node Version">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Directroy">
                <Upload {...upLoadProps}>
                  <Button icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ModalStyled>
    </>
  );
}
