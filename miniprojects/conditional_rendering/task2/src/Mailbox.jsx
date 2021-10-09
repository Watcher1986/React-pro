import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      <span className="mailbox__count">{unreadMessages.length}</span>
    </div>
  );
};

export default Mailbox;
