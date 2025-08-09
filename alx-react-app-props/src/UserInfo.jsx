import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() { // Removed userData prop
  return (
    <div>
      <h4>Additional User Info Section</h4>
      {/* UserDetails will get data from context, no prop needed */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;