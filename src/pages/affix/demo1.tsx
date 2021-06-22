import { Affix, Button } from 'antd';
import { useState } from 'react';
import styles from './styles.less';

export default () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Affix offsetTop={top}>
          <Button
            type="primary"
            onClick={() => {
              setTop(top + 10);
            }}
          >
            Affix Top : {top}
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={bottom}>
          <Button
            type="primary"
            onClick={() => {
              setBottom(bottom + 10);
            }}
          >
            Affix Buttom : {bottom}
          </Button>
        </Affix>
      </div>
    </div>
  );
};
