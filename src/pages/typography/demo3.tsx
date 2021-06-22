import { Space, Typography } from 'antd';
import React from 'react';

export default () => {
  const Text = Typography.Text;
  const Link = Typography.Link;
  return (
    <Space direction="vertical">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text disabled>Ant Design (disabled)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text code>Ant Design (code)</Text>
      <Text keyboard>Ant Design (keyborad)</Text>
      <Text underline>Ant Design (underline)</Text>
      <Text delete>Ant Design (delete)</Text>
      <Text strong>Ant Design (strong)</Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>
    </Space>
  );
};
