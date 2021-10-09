import React, { Component } from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends Component {
  state = {
    isOnline: [false, true],
  };

  render() {
    return <div className="status">{this.state.isOnline[1] ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
