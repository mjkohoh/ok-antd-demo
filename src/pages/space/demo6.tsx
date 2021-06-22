import { Button, Space } from 'antd';

export default () => {
  return (
    <Space wrap size={[8, 16]}>
      {new Array(20).fill(null).map((_, index) => {
        return <Button key={index}>Button</Button>;
      })}
    </Space>
  );
};
