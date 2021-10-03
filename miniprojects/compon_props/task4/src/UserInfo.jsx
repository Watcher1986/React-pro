import React from 'react';
import UserAvatar from './Avatar';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <UserAvatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
