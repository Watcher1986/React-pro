import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Search from './Search';

const rootElement = document.querySelector('#root');

const user = {
  name: 'Tom',
};

ReactDOM.render(<Search name={user.name} />, rootElement);
