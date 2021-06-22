import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import styles from './demo3.less';

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
      <Layout>
        <Layout.Sider width={200} className={styles.sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">optio11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content className={styles.content}>Content</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
