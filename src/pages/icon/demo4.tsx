import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

export default () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

  return (
    <Space>
      <IconFont type="icon-tuichu" />
      <IconFont type="icon-facebook" />
      <IconFont type="icon-twitter" />
    </Space>
  );
};
