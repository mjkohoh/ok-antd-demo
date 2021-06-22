import { Col, Divider, Row } from 'antd';
import React from 'react';
import './style.less';

export default () => {
  return (
    <div>
      <Divider orientation="left">Normal</Divider>
      <Row>
        <Col span={6} order={4} className="item light">
          1 col-order-4
        </Col>
        <Col span={6} order={3} className="item dark">
          2 col-order-3
        </Col>
        <Col span={6} order={2} className="item light">
          3 col-order-2
        </Col>
        <Col span={6} order={1} className="item dark">
          4 col-order-1
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row>
        <Col
          span={6}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
          className="item light"
        >
          1 col-order-repsponsive
        </Col>
        <Col
          span={6}
          xs={{ order: 2 }}
          sm={{ order: 1 }}
          md={{ order: 4 }}
          lg={{ order: 3 }}
          className="item dark"
        >
          2 col-order-repsponsive
        </Col>
        <Col
          span={6}
          xs={{ order: 3 }}
          sm={{ order: 4 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
          className="item light"
        >
          3 col-order-repsponsive
        </Col>
        <Col
          span={6}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
          className="item dark"
        >
          4 col-order-repsponsive
        </Col>
      </Row>
    </div>
  );
};
