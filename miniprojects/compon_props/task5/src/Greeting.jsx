import React from 'react';
import moment from 'moment';

const formatYear = (date) =>
  Math.floor(moment(new Date()).diff(new Date(date), 'months', true) % 12);

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.user.firstName} ${
        props.user.lastName
      }. I'm ${formatYear(props.user.birthDate)} years old`}
    </div>
  );
};

export default Greeting;
