import { Select } from 'antd';

export default () => {
  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value: any) => {
    console.log(`search ${value}`);
  };
  const onBlur = () => {
    console.log('blur');
  };
  const onFocus = () => {
    console.log('focus');
  };

  return (
    <Select
      style={{ width: 120 }}
      showSearch
      onChange={onChange}
      onSearch={onSearch}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder="Select a person"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children?.toLowerCase().indexOf(input.toLowerCase) >= 0
      }
    >
      <Select.Option value="jack">Jack</Select.Option>
      <Select.Option value="lucy">Lucy</Select.Option>
      <Select.Option value="tom">Tom</Select.Option>
    </Select>
  );
};
