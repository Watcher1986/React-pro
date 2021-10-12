import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionStatus: true,
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

  onOnline = e => {
    const intStatus = navigator.onLine;
    this.setStatus(intStatus);
  };

  setStatus = status => {
    this.setState({
      connectionStatus: status,
    });
  };

  render() {
    return this.state.connectionStatus ? (
      <div className="status">Online</div>
    ) : (
      <div className="status status_offline">Offline</div>
    );
  }
}

export default ConnectionStatus;
