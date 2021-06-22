import { Select, Space } from 'antd';

export default () => {
  const children = [];
  for (let i = 0; i < 36; i++) {
    const v = i.toString(2);
    children.push(
      <Select.Option key={v} value={v}>
        v
      </Select.Option>,
    );
  }
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Select
        style={{ width: '100%' }}
        mode="multiple"
        allowClear
        placeholder="Please select"
        defaultValue={['100', '111']}
        onChange={handleChange}
      >
        {children}
      </Select>
      <Select
        style={{ width: '100%' }}
        mode="multiple"
        disabled
        placeholder="Please select"
        defaultValue={['100', '111']}
        onChange={handleChange}
      >
        {children}
      </Select>
    </div>
  );
};
