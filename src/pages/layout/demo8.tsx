import {
  AppstoreOutlined,
  BarChartOutlined,
  CameraOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styles from './demo8.less';

export default () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider className={styles.sider}>
        <div className={styles.logo}></div>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav1
          </Menu.Item>
          <Menu.Item key="2" icon={<CameraOutlined />}>
            nav2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav8
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout style={{ marginLeft: '200px' }}>
        <Layout.Header style={{ backgroundColor: '#fff' }}></Layout.Header>
        <Layout.Content className={styles.content}>
          <div className={styles.wrapper}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
