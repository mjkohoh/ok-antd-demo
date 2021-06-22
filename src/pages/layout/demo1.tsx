import { Layout } from 'antd';
import React from 'react';

export default () => {
  const wrapperStyle: React.CSSProperties = {
    marginBottom: '28px',
  };

  const headerStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#7dbcea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    height: '100px',
    backgroundColor: 'rgba(16, 142, 233, 1)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const siderStyle: React.CSSProperties = {
    background: '#3ba0e9',
    color: 'white',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const footerStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#7dbcea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <Layout style={wrapperStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout style={wrapperStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Sider>
            <div style={siderStyle}>Sider</div>
          </Layout.Sider>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout style={wrapperStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Sider>
            <div style={siderStyle}>Sider</div>
          </Layout.Sider>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout>
        <Layout.Sider>
          <div style={siderStyle}>Sider</div>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={headerStyle}>Header</Layout.Header>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
};
