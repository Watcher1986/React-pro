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
    return this.state.connectionStatus === 'online' ? (
      <div className="status">{this.state.connectionStatus}</div>
    ) : (
      <div className="status status_offline">{this.state.connectionStatus}</div>
    );
  }
}

export default ConnectionStatus;
