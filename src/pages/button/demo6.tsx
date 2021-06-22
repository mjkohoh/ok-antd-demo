import { Button, Dropdown, Menu, Space } from 'antd';

export default () => {
  const menu = (
    <Menu onClick={(e) => console.log('click', e)}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2st item</Menu.Item>
      <Menu.Item key="3">3st item</Menu.Item>
    </Menu>
  );
  return (
    <Space>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
    </Space>
  );
};
