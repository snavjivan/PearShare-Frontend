import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';
import logo from './new-green-circle.png';
class Homepage extends React.Component {
    render() {
      return (
     <div class="home">
        <h1 class="title">Pear<span class="buddy">Share</span></h1>
        <img class="title" id="homeLogo" src={logo} alt="logo"></img>
        <img class="title" id="homeLogo" src={logo} alt="logo"></img>
       <div class="title" id="description">Words</div>
        <div class="homeButtons">

        </div>
      </div>

      );
    }
  }
  export default Homepage;
