import React, { useState } from 'react';
import UserProfile from './UserProfile';

const UserProfileContainer = () => {
  const [userId, setUserId] = useState(1); 


  const loadUser1 = () => {
    setUserId(1);
  };

  const loadUser2 = () => {
    setUserId(2);
  };

  const loadUser3 = () => {
    setUserId(3);
  };

  return (
    <div>
      <h1>User Profile Manager</h1>
      
      <div>
        <button onClick={loadUser1}>User 1</button>
        <button onClick={loadUser2}>User 2</button>
        <button onClick={loadUser3}>User 3</button>
      </div>
      
      <hr />
      <UserProfile userId={userId} />
    </div>
  );
};

export default UserProfileContainer;