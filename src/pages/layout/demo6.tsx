import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styles from './demo6.less';

export default () => {
  const [collapsed, setCollapsed] = useState(false);

  const triggerCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} trigger={null}>
        <div className={styles.logo}></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.header}>
          {collapsed ? (
            <MenuUnfoldOutlined
              className={styles.collapseIcon}
              onClick={triggerCollapse}
            />
          ) : (
            <MenuFoldOutlined
              className={styles.collapseIcon}
              onClick={triggerCollapse}
            />
          )}
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <div className={styles.wrapper}>Content</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
