import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = data => {
    console.log(data);
  };

  return <UserForm onSubmit={createUser} />;
};

export default App;
