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
          <span>π¨π³</span>
          China(δΈ­ε½)
        </div>
      </Select.Option>
      <Select.Option value="usa" label="USA">
        <div>
          <span>πΊπΈ</span>
          USA(ηΎε½)
        </div>
      </Select.Option>
      <Select.Option value="japan" label="Japan">
        <div>
          <span>π―π΅</span>
          Japan(ζ₯ζ¬)
        </div>
      </Select.Option>
      <Select.Option value="korea" label="Korea">
        <div>
          <span>π°π·</span>
          Korea(ι©ε½)
        </div>
      </Select.Option>
    </Select>
  );
};
