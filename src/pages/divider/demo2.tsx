import '@/pages/index.less';
import { Divider } from 'antd';

export default () => {
  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider>Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="left">Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="right">Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
    </div>
  );
};
