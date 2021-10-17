import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = userData => {
    //e.preventDefault();
    // const formData = [...new FormData(data)].reduce(
    //   (acc, [name, value]) => ({ ...acc, [name]: value }),
    //   {},
    // );

    console.log(userData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
