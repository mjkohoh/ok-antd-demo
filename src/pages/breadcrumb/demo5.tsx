import { Breadcrumb, Menu } from 'antd';

export default () => {
  const menu = (
    <Menu>
      <Menu.Item>General</Menu.Item>
      <Menu.Item>Layout</Menu.Item>
      <Menu.Item>Navigation</Menu.Item>
    </Menu>
  );

  return (
    <Breadcrumb>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
      <Breadcrumb.Item href="">Component</Breadcrumb.Item>
      <Breadcrumb.Item href="" overlay={menu}>
        General
      </Breadcrumb.Item>
      <Breadcrumb.Item>Button</Breadcrumb.Item>
    </Breadcrumb>
  );
};
