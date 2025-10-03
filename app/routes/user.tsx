import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { UserProfileHeader } from '../components/UserProfileHeader/UserProfileHeader'; 
import { Account } from '../components/account/Account'; 
import { EditUserForm } from '../components/EditUserForm/EditUserForm';


export default function User() {
  const userName = useSelector((state: RootState) => state.auth.user.userName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <EditUserForm onCancel={handleCancel} />
      ) : (
        <UserProfileHeader
          userName={userName}
          onEditClick={handleEditClick}
        />
      )}
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}