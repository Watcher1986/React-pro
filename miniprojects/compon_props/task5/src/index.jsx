import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2004-07-17T11:13:17.777Z',
};

ReactDOM.render(<Greeting user={userInfo} />, rootElement);
