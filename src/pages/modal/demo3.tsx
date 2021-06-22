import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCancle = () => {
    setModalVisible(false);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
    }, 2000);
  };
  const footer = [
    <Button key="cancel" onClick={handleCancle}>
      cancel
    </Button>,
    <Button key="ok" onClick={handleOk} loading={loading} type="primary">
      ok
    </Button>,
  ];
  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        show modal
      </Button>
      <Modal
        visible={modalVisible}
        title="title"
        onCancel={handleCancle}
        onOk={handleOk}
        confirmLoading={loading}
        footer={footer}
      >
        content
      </Modal>
    </>
  );
};
