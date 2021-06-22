import {
  HighlightOutlined,
  SmileFilled,
  SmileOutlined,
} from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [editableStr, setEditableStr] = useState('This is a editable text.');
  const [customIconStr, setCustomIconStr] = useState(
    'Custom Edit icon and replace tooltip text.',
  );
  const [hideTooltipsStr, setHideTooltipsStr] = useState('Hide Edit tooltip.');
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    'This is an editable text with limited length.',
  );
  const Paragraph = Typography.Paragraph;
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Paragraph editable={{ onChange: setEditableStr }}>
        {editableStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setCustomIconStr,
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
        }}
      >
        {customIconStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: false, onChange: setHideTooltipsStr }}>
        {hideTooltipsStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: 'Hello,Ant Design.' }}>
        Replact copy text.
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copied-icon" />,
          ],
          tooltips: ['click here', 'you clicked'],
        }}
      >
        Custom Icon and replace tooltips text.
      </Paragraph>
      <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips</Paragraph>
    </Space>
  );
};
