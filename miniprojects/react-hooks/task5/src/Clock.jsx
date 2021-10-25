import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = props => {
  const { location, offset } = props;
  const [currentTime, setCurrentDate] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment(getTimeWithOffset(offset)).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{currentTime}</div>
    </div>
  );
};

export default Clock;
