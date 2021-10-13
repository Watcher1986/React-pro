import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  userInfo = {
    name: 'Bob',
    student: true,
    occupation: 'Kyiv',
    about: 'learning React',
  };
  createUser = user => {
    // e.preventDefault();
    console.log(user);
  };

  render() {
    return <UserForm onSubmit={this.createUser(this.userInfo)} />;
  }
}

export default App;
