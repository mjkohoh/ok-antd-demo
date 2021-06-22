import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default () => {
  return (
    <Button
      onClick={() => {
        let count = 5;
        let i: any;
        const modal = Modal.error({
          content: `close in ${count} second`,
          onOk() {
            clearInterval(i);
          },
        });
        i = setInterval(() => {
          count--;
          console.log(count);
          if (count === 0) {
            modal.destroy();
            clearInterval(i);
          } else {
            modal.update({ content: `close in ${count} second` });
          }
        }, 1000);
      }}
    >
      open modal
    </Button>
  );
};
