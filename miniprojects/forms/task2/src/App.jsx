import React, { Component } from 'react';
import UserForm from './UserForm';

const App = () => {
  // userInfo = {
  //   name: 'Bob',
  //   student: true,
  //   occupation: 'Kyiv',
  //   about: 'learning React',
  // };
  const createUser = e => {
    // e.preventDefault();
    console.log(e);
  };

  return <UserForm onSubmit={createUser} />;
};

export default App;
