import { Select } from 'antd';

export default () => {
  return (
    <Select
      showSearch
      placeholder="Please select"
      style={{ width: '100%' }}
      optionFilterProp="children"
      filterOption={(input, option) => {
        return option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }}
      filterSort={(option1, option2) => {
        return option1.children
          .toLowerCase()
          .localeCompare(option2.children.toLowerCase());
      }}
    >
      <Select.Option value="1">Not Identified</Select.Option>
      <Select.Option value="2">Closed</Select.Option>
      <Select.Option value="3">Communicated</Select.Option>
      <Select.Option value="4">Identified</Select.Option>
      <Select.Option value="5">Resolved</Select.Option>
      <Select.Option value="6">Cancelled</Select.Option>
    </Select>
  );
};
