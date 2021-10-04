import React from 'react';
import moment from 'moment';

const formatYear = (date) =>
  Math.floor(moment(new Date()).diff(new Date(date), 'days', true) / 365);

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${formatYear(
        props.birthDate
      )} years old`}
    </div>
  );
};

export default Greeting;
