import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import IndivListing from './IndivListing';
import axios from 'axios';
import BASE_URL from '../HttpConstants.js';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get(BASE_URL + "items/").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const ListView = this.state.data.map((item, index) => {
      return (
        <Col span={6} key={index}>
          <IndivListing data={item} />
        </Col>
      );
    });

    return (
      <div id="listings">
        <h5 id="listingsTitle">Current <span class="share">Listings</span></h5>
          <div style={{ padding: '50px'}}>
            <Row gutter={24}>
              {ListView}
            </Row>
          </div>
      </div>
    );
  }
}

export default Listings;
