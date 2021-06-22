import { Slider, Space, Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [rows, setRows] = useState(1);
  const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
  return (
    <Space direction="vertical" style={{ width: 600, padding: 12 }}>
      <Slider value={rows} min={1} max={10} onChange={setRows} />
      <Typography.Paragraph
        ellipsis={{
          rows,
          expandable: true,
          onEllipsis: (ellipsis) => console.log(`Ellipsis change:${ellipsis}`),
          suffix: '--William Shakespeare',
        }}
        title={`${article}--William Shakespeare`}
      >
        {article}
      </Typography.Paragraph>
    </Space>
  );
};
