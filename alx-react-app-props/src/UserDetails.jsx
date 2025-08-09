import React, { useContext } from 'react';
import UserContext from './components/UserContext';


function UserDetails({ userData }) {
    // Consume UserContext using the useContext hook.
    const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;