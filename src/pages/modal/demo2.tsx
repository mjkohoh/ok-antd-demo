import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        show modal
      </Button>
      <Modal
        visible={modalVisible}
        title="title"
        onCancel={() => setModalVisible(false)}
        onOk={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setModalVisible(false);
          }, 2000);
        }}
        confirmLoading={loading}
      >
        content
      </Modal>
    </>
  );
};
