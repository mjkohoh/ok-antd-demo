import { Space, Switch, Typography } from 'antd';
import { useState } from 'react';

export default () => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <Space
      direction="vertical"
      style={{ padding: 10, width: 600, backgroundColor: 'grey' }}
    >
      <Switch checked={ellipsis} onChange={() => setEllipsis(!ellipsis)} />
      <Typography.Paragraph ellipsis={ellipsis}>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Typography.Paragraph>
      <Typography.Paragraph
        ellipsis={
          ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
        }
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Typography.Paragraph>
      <Typography.Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now' } : false}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Typography.Text>
    </Space>
  );
};
