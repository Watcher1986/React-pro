import React from 'react';

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
);

const UserGreeting = () => {
  return (
    <h1>
      Hello, user <Emoji symbol="😎" />
    </h1>
  );
};

export default UserGreeting;
