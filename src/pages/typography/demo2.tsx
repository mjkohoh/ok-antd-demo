import { Typography } from 'antd';
import React from 'react';

export default () => {
  const Title = Typography.Title;
  return (
    <Typography>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
    </Typography>
  );
};
