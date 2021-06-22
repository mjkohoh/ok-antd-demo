import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Modal.info({
            title: 'info',
            content: 'this is info',
            onOk() {
              console.log('info ok');
            },
          });
        }}
      >
        info
      </Button>

      <Button
        onClick={() => {
          Modal.success({
            title: 'success',
            content: 'this is success',
            onOk() {
              console.log('success ok');
            },
          });
        }}
      >
        success
      </Button>

      <Button
        onClick={() => {
          Modal.error({
            content: 'this is error',
            okText: 'miao',
          });
        }}
      >
        error
      </Button>

      <Button
        onClick={() => {
          Modal.warning({
            content: 'this is warning',
          });
        }}
      >
        warning
      </Button>
    </Space>
  );
};
