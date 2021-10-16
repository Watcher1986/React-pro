import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = data => {
    const formData = [...new FormData(data)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );

    console.log(formData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
