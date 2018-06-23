import React, { Component } from 'react';
import { Input } from 'antd';

class TextField extends React.Component {
  render() {
    const { TextArea } = Input;
    return (
      <TextArea placeholder="Authentication Token" autosize={{ minRows: 1, maxRows: 5 }} />
    );
  }
}

export default TextField;
