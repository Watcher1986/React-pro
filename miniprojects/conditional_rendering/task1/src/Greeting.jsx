import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = props => {
  // case1 ({ isLoggedIn }) => func args
  // case 2 func body const { isLoggedIn } = props - destruct. props obj
  // console.log(props);
  if (props.isLoggedIn) {
    //  if (isLoggedIn)
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
