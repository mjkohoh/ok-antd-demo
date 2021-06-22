import { Button, Space } from 'antd';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <Space className="site-button-ghost-wrapper">
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
    </Space>
  );
};
