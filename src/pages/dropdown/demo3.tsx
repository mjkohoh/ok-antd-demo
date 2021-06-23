import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';

export default () => {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nt menu item</Menu.Item>
      <Menu.Item>3rt menu item</Menu.Item>
    </Menu>
  );
  return (
    <div
      style={{
        width: '100wh',
        height: '300px',
        padding: '24px',
        marginTop: '300px',
      }}
    >
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button>bottomRight</Button>
          </Dropdown>
        </Space>
        <Space wrap>
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topCenter" arrow>
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight" arrow>
            <Button>topRight</Button>
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};
