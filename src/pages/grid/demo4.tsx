import { Col, Row } from 'antd';
import React from 'react';
import './style.less';

export default () => {
  return (
    <Row>
      <Col className="item light" span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col className="item dark" span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  );
};
