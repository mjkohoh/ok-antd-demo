import { Button, Drawer } from 'antd';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some Content...</p>
        <p>Some Content...</p>
        <p>Some Content...</p>
      </Drawer>
    </div>
  );
};
