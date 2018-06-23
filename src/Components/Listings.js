import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';

class Listings extends Component {
  render() {
    return (
      <div id="listings">
        <h5 id="listingsTitle">Current <span class="share">Listings</span></h5>
          <div style={{ padding: '50px' }}>
            <Row gutter={24}>
              <Col span={8}>
                <Card
                  cover={<img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" />}
                  actions={[<div><Icon type="info-circle-o" /> More Info</div>, <div><Icon type="shopping-cart" /> Buy Now!</div>]}
                >
                  <Card.Meta
                    title="Food"
                    description="Price"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={<img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" />}
                  actions={[<div><Icon type="info-circle-o" /> More Info</div>, <div><Icon type="shopping-cart" /> Buy Now!</div>]}
                >
                  <Card.Meta
                    title="Food"
                    description="Price"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={<img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" />}
                  actions={[<div><Icon type="info-circle-o" /> More Info</div>, <div><Icon type="shopping-cart" /> Buy Now!</div>]}
                >
                  <Card.Meta
                    title="Food"
                    description="Price"
                  />
                </Card>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

export default Listings;
