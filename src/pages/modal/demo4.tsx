import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default () => {
  const showConfirm = () => {
    Modal.confirm({
      title: '确认删除',
      content: '是否确认删除XXXXXX-XXXXXX',
      onOk: () => console.log('on ok'),
      onCancel: () => console.log('on cancel'),
    });
  };
  const showConfirmWithPromise = () => {
    Modal.confirm({
      title: '确认删除',
      content: '是否确认删除XXXXXX-XXXXXX',
      onOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    });
  };
  const showConfirmDelete = () => {
    Modal.confirm({
      title: '确认删除',
      content: '是否确认删除XXXXXX-XXXXXX',
      okType: 'danger',
    });
  };
  return (
    <>
      <Space>
        <Button type="ghost" onClick={showConfirm}>
          Confirm
        </Button>
        <Button type="ghost" onClick={showConfirmWithPromise}>
          with promise
        </Button>
        <Button type="dashed" onClick={showConfirmDelete}>
          delete
        </Button>
      </Space>
    </>
  );
};
