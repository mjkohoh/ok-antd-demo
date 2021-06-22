import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default () => {
  return (
    <Button
      onClick={() => {
        for (let i = 3; i > 0; i--) {
          Modal.error({
            title: 'there is some error',
            content: (
              <Button
                onClick={() => {
                  Modal.destroyAll();
                }}
              >
                close all
              </Button>
            ),
          });
        }
      }}
    >
      show 3 modal
    </Button>
  );
};
