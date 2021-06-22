import {
  LaptopOutlined,
  NotificationOutlined,
  UsbOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import styles from './demo4.less';

export default () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Header>
        <div className={styles.logo}></div>
        <Menu theme="dark" mode="horizontal" selectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content
        style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            backgroundColor: '#fff',
          }}
        >
          <Layout.Sider style={{ backgroundColor: '#fff' }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <Menu.SubMenu key="sub1" icon={<UsbOutlined />} title="subnav 1">
                <Menu.Item key="1">option 1</Menu.Item>
                <Menu.Item key="2">option 2</Menu.Item>
                <Menu.Item key="3">option 3</Menu.Item>
                <Menu.Item key="4">option 4</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="subnav 2"
              >
                <Menu.Item key="5">option 5</Menu.Item>
                <Menu.Item key="6">option 6</Menu.Item>
                <Menu.Item key="7">option 7</Menu.Item>
                <Menu.Item key="8">option 8</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="subnav 3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option 9</Menu.Item>
                <Menu.Item key="10">option 10</Menu.Item>
                <Menu.Item key="11">option 11</Menu.Item>
                <Menu.Item key="12">option 12</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout.Content style={{ padding: '0 28px', minHeight: '280px' }}>
            Content
          </Layout.Content>
        </Layout>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    </Layout>
  );
};
