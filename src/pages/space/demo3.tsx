import { Button, Radio, Space } from 'antd';
import { SpaceSize } from 'antd/lib/space';
import { useState } from 'react';

export default () => {
  const [size, setSize] = useState<SpaceSize>('small');
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};
