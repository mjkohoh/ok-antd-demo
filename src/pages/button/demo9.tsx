import { Button, Space } from 'antd';

export default () => {
  return (
    <Space
      style={{
        width: '400px',
        backgroundColor: 'grey',
        padding: 12,
        margin: 8,
      }}
      direction="vertical"
    >
      <Button type="primary" block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type="dashed" block>
        Dashed
      </Button>
      <Button type="link" block>
        Link
      </Button>
    </Space>
  );
};
