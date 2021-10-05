import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location={'London'} offset={1} />
      <Clock location={'Kyiv'} offset={3} />
      <Clock location={'New York'} offset={-4} />
    </>
  );
};

export default App;
