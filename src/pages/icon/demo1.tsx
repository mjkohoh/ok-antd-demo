import {
  HomeOutlined,
  LoginOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoginOutlined />
    </Space>
  );
};
