import { Button, Drawer } from 'antd';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  return (
    <div
      style={{
        textAlign: 'center',
        height: '200px',
        margin: '24px',
        padding: '48px',
        backgroundColor: '#fafafa',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #ebedf0',
        borderRadius: '2px',
      }}
    >
      Render in this
      <div style={{ marginTop: '16px' }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <p>Some Content...</p>
      </Drawer>
    </div>
  );
};
