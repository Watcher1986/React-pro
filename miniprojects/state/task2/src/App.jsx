import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location={'Kyiv'} offset={0} />
      <Clock location={'London'} offset={2} />
      <Clock location={'New York'} offset={-5} />
    </>
  );
};

export default App;
