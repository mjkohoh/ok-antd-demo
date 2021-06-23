import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

export default () => {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        2nd menu item (disabled)
      </Menu.Item>
      <Menu.Item disabled>3rt menu item (disabled)</Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
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
