import { Button, Drawer, Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<
    'right' | 'top' | 'left' | 'bottom'
  >('right');

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  const onChange = (e: RadioChangeEvent) => setPlacement(e.target.value);
  return (
    <>
      <Space>
        <Radio.Group defaultValue={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
      </Space>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        closable={false}
        placement={placement}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some Content...</p>
        <p>Some Content...</p>
        <p>Some Content...</p>
      </Drawer>
    </>
  );
};
