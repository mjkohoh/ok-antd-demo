import { Button, Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primairy(disabled)
        </Button>
      </Space>
      <Space>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </Space>
      <Space>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
      </Space>
      <Space>
        <Button danger>Danger Text</Button>
        <Button danger disabled>
          Danger Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
      </Space>
      <Space style={{ backgroundColor: 'grey', padding: 10 }}>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </Space>
    </Space>
  );
};
