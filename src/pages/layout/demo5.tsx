import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import styles from './demo5.less';

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className={styles.logo}></div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['4']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="7">Team 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="8" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ backgroundColor: '#fff' }}></Layout.Header>
        <Layout.Content style={{ margin: '0 16px' }} className={styles.content}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.wrapper}>Bill is a cat</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
