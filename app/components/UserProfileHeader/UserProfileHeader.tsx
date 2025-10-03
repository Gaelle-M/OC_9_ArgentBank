import React from 'react';

type UserProfileHeaderProps = {
  userName: string;
  onEditClick: () => void;
};


export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ userName, onEditClick }) => {
  return (
    <div className="user-profil-header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button" onClick={onEditClick}>Edit Name</button>
    </div>
  );
};