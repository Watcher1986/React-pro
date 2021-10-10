import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {!this.state.isLoggedIn ? (
          <Login onLogin={this.onLogin} />
        ) : (
          <Logout onLogout={this.onLogout} />
        )}
      </div>
    );
  }
}

export default Auth;
