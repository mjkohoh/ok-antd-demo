import { Select } from 'antd';

export default () => {
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      style={{ width: '100%' }}
      mode="multiple"
      placeholder="Please select"
      onChange={handleChange}
      optionLabelProp="label"
    >
      <Select.Option value="china" label="China">
        <div>
          <span>🇨🇳</span>
          China(中国)
        </div>
      </Select.Option>
      <Select.Option value="usa" label="USA">
        <div>
          <span>🇺🇸</span>
          USA(美国)
        </div>
      </Select.Option>
      <Select.Option value="japan" label="Japan">
        <div>
          <span>🇯🇵</span>
          Japan(日本)
        </div>
      </Select.Option>
      <Select.Option value="korea" label="Korea">
        <div>
          <span>🇰🇷</span>
          Korea(韩国)
        </div>
      </Select.Option>
    </Select>
  );
};
