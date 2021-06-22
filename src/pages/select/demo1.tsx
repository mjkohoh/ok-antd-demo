import { Select, Space } from 'antd';

export default () => {
  const handleChange = (value: any) => {
    console.log(value);
  };

  return (
    <Space>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="luck">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      <Select defaultValue="luck" style={{ width: 120 }} disabled>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <Select defaultValue="luck" style={{ width: 120 }} loading>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <Select defaultValue="luck" style={{ width: 120 }} allowClear>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
    </Space>
  );
};
