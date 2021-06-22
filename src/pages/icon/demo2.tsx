import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from '@ant-design/icons';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <SmileTwoTone />
      <HeartTwoTone twoToneColor="#eb2f96" />
      <CheckCircleTwoTone twoToneColor="#52c41a" />
    </Space>
  );
};
