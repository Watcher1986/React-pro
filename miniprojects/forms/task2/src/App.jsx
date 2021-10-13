import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  // userInfo = {
  //   name: 'Bob',
  //   student: true,
  //   occupation: 'Kyiv',
  //   about: 'learning React',
  // };
  createUser = ({ state }) => {
    // e.preventDefault();
    console.log(state);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
