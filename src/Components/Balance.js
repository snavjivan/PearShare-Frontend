import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';

class Balance extends React.Component {
    render() {
        return (
            <div >
                <h1 id="balanceHeader">Balance</h1> 
                <div id="jacsfirstbox">   
                    <p id= "balanceText">$50.83</p>
                </div>
            </div>
        )
    }
}
export default Balance;