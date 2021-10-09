import React, { Component } from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends Component {
  state = {
    isOnline: false,
  };

  render() {
    return <div className="status">{this.state.isOnline ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
