import '@/pages/index.less';
import { Divider } from 'antd';
export default () => {
  return (
    <div className="container">
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  );
};
