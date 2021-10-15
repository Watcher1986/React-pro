import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = data => {
    // e.preventDefault();
    const formData = [...new FormData(data)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );
    // e.preventDefault();

    console.log(formData);
  };

  return <UserForm onSubmit={() => createUser()} />;
};

export default App;
