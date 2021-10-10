import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    isLoggedIn: true,
    spinnerOn: false,
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogin = () => {
    this.setState({ spinnerOn: true });
    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        spinnerOn: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        {this.state.spinnerOn ? (
          <Spinner size={{ height: '33px', width: '33px' }} />
        ) : this.state.isLoggedIn ? (
          <Login onLogin={this.onLogin} />
        ) : (
          <Logout onLogout={this.onLogout} />
        )}
      </>
    );
  }
}

export default Auth;
