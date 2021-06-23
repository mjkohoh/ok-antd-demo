import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

export default () => {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>1nd menu item</Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled>1rd menu item (disabled)</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  );
};
