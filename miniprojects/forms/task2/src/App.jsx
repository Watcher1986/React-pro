import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = data => {
    // e.persist();
    // e.preventDefault();
    console.log(data);
  };

  return <UserForm onSubmit={createUser} />;
};

export default App;
