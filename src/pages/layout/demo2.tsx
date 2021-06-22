import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import styles from './demo2.less';

export default () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Header>
        <div className={styles.logo}></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <Breadcrumb className={styles.breadCrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.wrapper}>Content</div>
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    </Layout>
  );
};
