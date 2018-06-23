import React, { Component } from 'react';
import { Row, Col, Card, Icon, Modal, Button } from 'antd';
import TextField from './TextField';

class IndivListing extends Component {
  state = {
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1500);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;

    return (
      <div>
      <Card
        cover={<img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" />}
        actions={[<div onClick={this.showModal}><Icon type="shopping-cart" /> Buy Now!</div>]}
      >
        <Card.Meta
          title="Food"
          description="Price"
        />
      </Card>

      <Modal title="Confirm Purchase"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="purchase" type="primary" loading={confirmLoading} onClick={this.handleOk}>
              Purchase
            </Button>,
          ]}
        >
          <div id="purchaseModalImage"><img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" width="250px"/></div>
          <div id="purchaseModal">
            <h2 id="f">Food: </h2>
            <p>Price: </p>
            <p>Status: </p>
            <p>Seller: </p>
            <p>Description: </p>
            <p>Authentication Token: </p>
          </div>
        </Modal>

      </div>
    );
  }
}

export default IndivListing;
