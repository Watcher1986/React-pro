import React, { Component } from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = e => {
    e.preventDefault();
    console.log(e);
  };

  return <UserForm onSubmit={() => createUser} />;
};

export default App;
