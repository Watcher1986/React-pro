import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={77} interval={777} />
      <Counter start={33} interval={333} />
    </>
  );
};

export default App;
