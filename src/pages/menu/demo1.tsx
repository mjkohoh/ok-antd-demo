import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';

export default () => {
  const [current, setCurrent] = useState<string>('mail');

  const handleClick = (e: MenuInfo) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item key="alipay">
        <a>Navigation Four - Link</a>
      </Menu.Item>
    </Menu>
  );
};
