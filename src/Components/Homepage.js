import React, { Component } from 'react';
import { Button, Radio, Icon, Modal, Row, Col, Input } from 'antd';
import logo from './new-green-circle.png';
class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

    render() {
      return (
      <div class="home">
        <h1 class="title">Pear<span class="share">Share</span></h1>
        <img class="title" id="homeLogo" src={logo} alt="logo"></img>
       <div class="title" id="description">reducing waste, <span class="motto2">filling stomachs</span>
       <div style={{height: '15px' }}></div>
       <Button size="large" type="primary" onClick={() => this.setModalVisible(true)}><Icon type="flag"/>Get Started Today</Button>
         <Modal
           title="Log In / Sign Up"
           wrapClassName="vertical-center-modal"
           visible={this.state.modalVisible}
           onOk={() => this.setModalVisible(false)}
           onCancel={() => this.setModalVisible(false)}
           footer={null}
         >

           <Row>
             <Col span={10}>
               <b>Log In</b>
               <br/>
               <br/>
               <Input
                 placeholder="Email"
                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <br/>
               <br/>
               <Input
                 placeholder="Password"
                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <br/>
               <br/>
               <Button type="primary">Log In!</Button>

             </Col>
             <Col span={4}></Col>
             <Col span={10}>
               <b>Sign Up</b>
               <br/>
               <br/>
               <Input
                 placeholder="Charity Name"
                 prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <br/>
               <br/>
               <Input
                 placeholder="Email"
                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <br/>
               <br/>
               <Input
                 placeholder="Password"
                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <br/>
               <br/>
               <Button type="primary">Sign Up!</Button>

             </Col>
           </Row>

         </Modal>
       </div>
      </div>
    );
  }
}
export default Homepage;
