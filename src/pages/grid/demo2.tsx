import '@/pages/index.less';
import './style.less';
import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
export default () => {
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <div>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
        <Col span={6}>
          <div className="item light">col-6</div>
        </Col>
      </Row>
    </div>
  );
};
