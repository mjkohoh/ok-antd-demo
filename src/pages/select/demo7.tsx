import { Select } from 'antd';

export default () => {
  const handleChange = (value: any) => console.log(value);

  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Please select"
      onChange={handleChange}
    >
      <Select.OptGroup label="Manager">
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Engineer">
        <Select.Option value="yiminghe">yiminghe</Select.Option>
      </Select.OptGroup>
    </Select>
  );
};
