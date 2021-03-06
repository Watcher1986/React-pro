import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Profile from './Profile';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

ReactDOM.render(<Profile userData={userInfo} />, rootElement);
