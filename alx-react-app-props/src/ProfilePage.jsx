import React from 'react';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';

function ProfilePage() { // Removed userData prop
  return (
    <div>
      <h2>User Profile</h2>
      {/*
        No longer need to pass userData as a prop to UserDetails or UserInfo.
        They will now consume it directly from the context.
      */}
      <UserInfo /> {/* If UserInfo exists and wraps UserDetails */}
      <UserDetails />
    </div>
  );
}

export default ProfilePage;