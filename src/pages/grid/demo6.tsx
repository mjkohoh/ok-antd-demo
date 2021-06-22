import { Col, Divider, Row } from 'antd';
import React from 'react';
import './style.less';
export default () => {
  return (
    <div>
      <Divider orientation="left">Align Top</Divider>
      <Row justify="center" align="top">
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
      </Row>
      <Divider orientation="left">Align Middle</Divider>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
      </Row>
      <Divider orientation="left">Align Bottom</Divider>
      <Row justify="space-between" align="bottom">
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light tall">col-4</div>
        </Col>
        <Col span={4}>
          <div className="item light">col-4</div>
        </Col>
      </Row>
    </div>
  );
};
