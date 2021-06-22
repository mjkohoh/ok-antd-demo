import { Col, Divider, Row } from 'antd';
import React from 'react';
import './style.less';

export default () => {
  return (
    <div>
      <Divider orientation="left">Percentage columns</Divider>
      <Row>
        <Col flex={2} className="item dark">
          2/5
        </Col>
        <Col flex={3} className="item light">
          3/5
        </Col>
      </Row>
      <Divider orientation="left">Fill rest</Divider>
      <Row>
        <Col flex="100px" className="item dark">
          100px
        </Col>
        <Col flex="auto" className="item light">
          Fill Rest
        </Col>
      </Row>
      <Divider orientation="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px" className="item dark">
          1 1 200px
        </Col>
        <Col flex="0 1 300px" className="item light">
          0 1 300px
        </Col>
      </Row>
      <Row wrap={false}>
        <Col flex="none" className="item light">
          <div style={{ padding: '0 16px' }}>none</div>
        </Col>
        <Col flex="auto" className="item dark">
          auto with no wrap
        </Col>
      </Row>
    </div>
  );
};
