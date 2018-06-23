import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Listings from "./Components/Listings";
import logo from './new-green-circle.png';
import { Affix, Menu, Icon, Input, Modal, Button, Row, Col, Tooltip } from 'antd';


class App extends React.Component {
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
      <Router basename="/">
        <div>
          <div style={{ background: '#f6ecdf', height: '10px' }}></div>
          <Affix>
              <Menu
                  id="navBar"
                  className = "menu"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  theme="light"
              >
                <Menu.Item key="logo">
                  <Link to = "/"><img src={logo} height="40px"></img> &nbsp;&nbsp;PearShare</Link>
                </Menu.Item>

                <Menu.Item key="">
                </Menu.Item>

                <Menu.Item key="about">
                  <Link to = "/listings"><Icon type="shopping-cart" />View Listings</Link>
                </Menu.Item>

                <Menu.Item key="balance">
                  <Tooltip placement="bottomRight" title={"This is the amount you have available to spend."}>
                    <Link to = "/"><Icon type="wallet" />Balance = $103.97</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item style={{float: 'right'}} key="search">
                  <Input.Search
                    placeholder="Search Listings"
                    onSearch={value => console.log(value)}
                    enterButton
                  />
                </Menu.Item>

                <Menu.Item style={{float: 'right'}} key='login'>
                  <a onClick={() => this.setModalVisible(true)}>
                    <Icon type="login"/>Log In
                  </a>
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
                </Menu.Item>

              </Menu>
          </Affix>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/listings" component={Listings}/>
        </div>
      </Router>
    )
  }
}
export default App;
