import React, { Component } from 'react';

const UserProfile = ({userData}) => {
  
    if (!userData) {
      return null;
    }
    const { name, location, avatar_url } = userData;
    return (
      <div className="user">
        <img src={avatar_url} alt="User Avatar" className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }


export default UserProfile;
