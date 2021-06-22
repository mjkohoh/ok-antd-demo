import { Select, Space } from 'antd';
import { useState } from 'react';

const data = {
  ZheJiang: ['HangZhou', 'NingBo', 'WenZhou'],
  JiangSu: ['NanJing', 'SuZhou', 'Zhenjiang'],
};

export default () => {
  const provinces = Object.keys(data);
  const [province, setProvince] = useState<string>(provinces[0]);
  const [city, setCity] = useState(data[province][0]);
  const handleProvinceChange = (value: any) => {
    console.log(`province selected ${value}`);
    setProvince(value);
    setCity(data[value][0]);
  };
  const handleCityChange = (value: any) => {
    console.log(`city selected ${value}`);
    setCity(value);
  };
  return (
    <Space>
      <Select
        style={{ width: 120 }}
        placeholder="Please select province"
        onChange={handleProvinceChange}
        value={province}
      >
        {provinces.map((v) => (
          <Select.Option key={v} value={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        placeholder="Please select city"
        onChange={handleCityChange}
        value={city}
      >
        {data[province]?.map((v: string) => (
          <Select.Option key={v} value={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
};
