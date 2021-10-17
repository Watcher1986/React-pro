import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = data => {
    //e.preventDefault();
    const formData = [...new FormData(data)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );
    //() => e.preventDefault();

    console.log(formData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
