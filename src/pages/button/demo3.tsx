import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React, { useState } from 'react';

export default () => {
  const [size, setSize] = useState<SizeType>('middle');
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space>
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
      </Space>
      <br />
      <br />
      <Space>
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size={size}
          shape="circle"
        />
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size={size}
          shape="round"
        />
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size={size}
          shape="round"
        >
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </Space>
    </>
  );
};
