import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import IndivListing from './IndivListing';

class Listings extends Component {
  render() {
    return (
      <div id="listings">
        <h5 id="listingsTitle">Current <span class="share">Listings</span></h5>
          <div style={{ padding: '50px'}}>
            <Row gutter={24}>
              <Col span={6}>
                <IndivListing/>
              </Col>
              <Col span={6}>
                <IndivListing/>
              </Col>
              <Col span={6}>
                <IndivListing/>
              </Col>
              <Col span={6}>
                <IndivListing/>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

export default Listings;
