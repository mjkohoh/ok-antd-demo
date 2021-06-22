import { Radio, Select } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { useState } from 'react';
export default () => {
  const [size, setSize] = useState<SizeType>('middle');
  const children = [];
  for (let i = 0; i < 10; i++) {
    const v = i.toString(2);
    children.push(
      <Select.Option key={v} value={v}>
        {v}
      </Select.Option>,
    );
  }
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>

      <br />
      <br />

      <Select
        style={{ width: 200 }}
        size={size}
        placeholder="Please select"
        defaultValue={111}
      >
        {children}
      </Select>
      <br />
      <br />
      <Select
        mode="multiple"
        style={{ width: 200 }}
        size={size}
        placeholder="Please select"
        defaultValue={[111]}
      >
        {children}
      </Select>
      <br />
      <br />
      <Select
        mode="tags"
        style={{ width: 200 }}
        size={size}
        placeholder="Please select"
        defaultValue={[111]}
      >
        {children}
      </Select>
    </>
  );
};
