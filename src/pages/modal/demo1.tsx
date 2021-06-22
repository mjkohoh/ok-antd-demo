import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        show modal
      </Button>
      <Modal
        visible={modalVisible}
        title="title"
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        content
      </Modal>
    </>
  );
};
