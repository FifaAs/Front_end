import React, { useState, useEffect } from 'react';
const UserProfile = () => {
   const [user, setUser] = useState(null);         
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);
  useEffect(() => {
  const fetchUserData = async () => {
    setLoading(true);  
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      
      const data = await response.json();
      setUser(data);        
      setLoading(false);   
      
    } catch (err) {
      setError(err.message);  
      setLoading(false);      
    }
  };

  fetchUserData();
}, []);
if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
 return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      )}
    </div>
  );
};
export default UserProfile;