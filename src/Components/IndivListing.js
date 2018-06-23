import React, { Component } from 'react';
import { Row, Col, Card, Icon, Modal, Button } from 'antd';
import TextField from './TextField';
import axios from 'axios';
import BASE_URL from '../HttpConstants.js';

class IndivListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      confirmLoading: false,
      token: ""
    }
  }

  handleChange(e) {
    this.setState({
      token: e.target.value
    });
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
    const { data } = this.props;
    if (data.status === "unsold") {
      axios.get(BASE_URL + "items/update/" + data.id).then((_) => {
        this.props.data.status = "transacted";
      });
      setTimeout(() => {
        this.setState({
          visible: true,
          confirmLoading: false,
        });
      }, 1500);
    }
    else {
      const { token } = this.state;
      axios.get(BASE_URL + "twizo/messageId/1").then((res) => {
        const messageId = res.data['messageId'];
        axios.get(BASE_URL + "twizo/check/" + messageId + "/" + token).then((res) => {
          // Add to blockchain...
        })
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 1500);
    }
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const { data } = this.props;
    console.log(data);
    const imgSrc = "data:image/png;base64," + data.image_b64_addr;

// <img src="https://nuts.com/images/auto/510x340/assets/e897e6ddc2621543.png" />
    return (
      <div>
        <Card
          cover={<img src={imgSrc} />}
          actions={[<div onClick={this.showModal}><Icon type="shopping-cart" style={{marginRight: "10px"}} />
            {data.status === "unsold" ? "Buy Now!" : "Transacted!" }
          </div>]}
        >
        <Card.Meta
          title={data.title}
          description={"Price: " + data.price}
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
                {data.status === "unsold" ? "Purchase" : "Verify Token"}
              </Button>
            ]}
        >
            <div id="purchaseModalImage"><img src={imgSrc} className="rotate90" height="100px" /></div>
            <div id="purchaseModal">
              <h2 id="f">{data.title}</h2>
              <p>Price: {data.price}</p>
              <p>Status: {data.status}</p>
              <p>Seller: Ben's Bakery</p>
              <p>Description: {data.description}</p>
              <div style={{"display": data.status === "unsold" ? "none" : "block" }}>
                <p>Authentication Token: 
                  <TextField value={this.state.token} handleChange={this.handleChange.bind(this)}/>
                </p>
              </div>
            </div>
          </Modal>
      </div>
    );
  }
}

export default IndivListing;
