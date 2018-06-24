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
        axios.get(BASE_URL + "twizo/check/" + messageId + "/" + token);
        window.localStorage.setItem("balance", parseInt(window.localStorage.getItem("balance")) - this.props.data.price);
        // Add to blockchain...
        const verification = window.verification;
        verification.createNewTransaction(messageId);
        verification.updateStatus();
        verification.updateToken(token);
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
    return (
      <div style={{marginBottom: "30px"}}>
        <Card
          cover={<img src={imgSrc} />}
          actions={[<div onClick={this.showModal}><Icon type="shopping-cart" style={{marginRight: "10px"}} />
            {data.status === "unsold" ? "Buy Now!" : "Transacted!" }
          </div>]}
        >
        <Card.Meta
          title={data.title}
          description={"Price: $" + data.price}
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
          <div className="rotate90">
            <img src={imgSrc} id="purchaseModalImage" height="25%" width="60%" />
          </div>
            <div id="purchaseModal">
              <h2 id="f"><i>{data.title}</i></h2>
              <p><b>Price:</b> {data.price}</p>
              <p><b>Status:</b> {data.status}</p>
              <p><b>Seller:</b> Ben's Bakery</p>
              <p><b>Description:</b> {data.description}</p>
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
