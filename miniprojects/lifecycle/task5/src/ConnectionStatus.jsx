import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionStatus: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    // const intStatus = navigator.onLine ? 'online' : 'offline';
    this.setStatus('online');
  };

  onOffline = () => {
    // const intStatus = navigator.onLine ? 'online' : 'offline';
    this.setStatus('offline');
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
