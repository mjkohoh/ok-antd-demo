import { Affix, Button } from 'antd';
import styles from './styles.less';
export default () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
          <Button>120px to affix top</Button>
        </Affix>
      </div>
    </div>
  );
};
