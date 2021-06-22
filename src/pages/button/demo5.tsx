import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const enterLoading = (index: number) => {
    const newLoadings = [...loadings];
    newLoadings[index] = true;
    setLoadings(newLoadings);
    setTimeout(() => {
      const newLoadings = [...loadings];
      newLoadings[index] = false;
      setLoadings(newLoadings);
    }, 2000);
  };
  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>
      <Space>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
    </Space>
  );
};
