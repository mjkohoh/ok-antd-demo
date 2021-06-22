import { Button, Space } from 'antd';
import styles from './demo4.less';

export default () => {
  return (
    <div className={styles.spaceAlignContainer}>
      <div className={styles.spaceAlignBlock}>
        <Space align="center">
          center
          <Button type="primary">Primary</Button>
          <span className={styles.mockBlock}>Block</span>
        </Space>
      </div>
      <div>
        <div className={styles.spaceAlignBlock}>
          <Space align="start">
            center
            <Button type="primary">Primary</Button>
            <span className={styles.mockBlock}>Block</span>
          </Space>
        </div>
      </div>
      <div>
        <div className={styles.spaceAlignBlock}>
          <Space align="end">
            center
            <Button type="primary">Primary</Button>
            <span className={styles.mockBlock}>Block</span>
          </Space>
        </div>
      </div>
      <div>
        <div className={styles.spaceAlignBlock}>
          <Space align="baseline">
            center
            <Button type="primary">Primary</Button>
            <span className={styles.mockBlock}>Block</span>
          </Space>
        </div>
      </div>
    </div>
  );
};
