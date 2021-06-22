import { Button, Space } from 'antd';

export default () => {
  return (
    <Space>
      <Button type="primary" danger>
        Primamy
      </Button>
      <Button>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </Space>
  );
};
