import React from 'react';

type UserProfileHeaderProps = {
  userName: string;
};

export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ userName }) => {
  return (
    <div className="user-profil-header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};