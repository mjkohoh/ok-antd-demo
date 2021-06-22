import { Col, Row, Space } from 'antd';
import React from 'react';
import '@/pages/index.less';
import './style.less';

export default () => {
  return (
    <Space direction="vertical" className="container">
      <Row>
        <Col span={24} className="item light">
          col
        </Col>
      </Row>
      <Row>
        <Col span={12} className="item light">
          col-12
        </Col>
        <Col span={12} className="item dark">
          col-12
        </Col>
      </Row>
      <Row>
        <Col span={8} className="item light">
          col-12
        </Col>
        <Col span={8} className="item dark">
          col-12
        </Col>
        <Col span={8} className="item light">
          col-12
        </Col>
      </Row>
      <Row>
        <Col span={6} className="item light">
          col-12
        </Col>
        <Col span={6} className="item dark">
          col-12
        </Col>
        <Col span={6} className="item light">
          col-12
        </Col>
        <Col span={6} className="item dark">
          col-12
        </Col>
      </Row>
    </Space>
  );
};
