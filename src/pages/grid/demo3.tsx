import { Col, Row } from 'antd';
import React from 'react';
import './style.less';

export default () => {
  return (
    <div style={{ margin: '0 16px' }}>
      <Row style={{ margin: '16px 0' }}>
        <Col span={8}>
          <div className="item light">col-8</div>
        </Col>
        <Col span={8} offset={8}>
          <div className="item light">col-8</div>
        </Col>
      </Row>
      <Row style={{ margin: '16px 0' }}>
        <Col span={6} offset={6}>
          <div className="item light">col-6 col-offset-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div className="item light">col-6 col-offset-6</div>
        </Col>
      </Row>
      <Row style={{ margin: '16px 0' }}>
        <Col span={12} offset={6}>
          <div className="item light">col-12 col-offset-6</div>
        </Col>
      </Row>
    </div>
  );
};
