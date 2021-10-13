import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionStatus: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOnline);
  }

  onOnline = () => {
    const intStatus = navigator.onLine ? 'online' : 'offline';
    this.setStatus(intStatus);
  };

  setStatus = status => {
    this.setState({
      connectionStatus: status,
    });
  };

  render() {
    const className = this.state.connectionStatus === 'online' ? 'status' : 'status status_offline';
    return <div className={className}>{this.state.connectionStatus}</div>;
  }
}

export default ConnectionStatus;
