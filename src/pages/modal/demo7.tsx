import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default () => {
  return (
    <Space>
      <Button onClick={() => Modal.success({ content: 'success' })}>
        modal default
      </Button>
      <Button
        onClick={() => Modal.success({ content: 'success', centered: true })}
      >
        modal center
      </Button>
    </Space>
  );
};
