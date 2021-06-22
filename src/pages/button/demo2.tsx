import { SearchOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import React from 'react';

export default () => {
  return (
    <Space>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
    </Space>
  );
};
