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

const GuestGreeting = () => {
  return (
    <h1>
      Hi Stranger. Please login <Emoji symbol="🚀" />
    </h1>
  );
};

export default GuestGreeting;
