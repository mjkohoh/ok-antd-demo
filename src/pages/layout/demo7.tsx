import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import styles from './demo7.less';

export default () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
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
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ backgroundColor: '#fff' }}></Layout.Header>
        <Layout.Content className={styles.content}>
          <div className={styles.wrapper}>Content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
