import React, { useState, useEffect } from 'react';
const UserProfile = () => {
   const [user, setUser] = useState(null);         
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1)
  useEffect(() => {
    const abortCntroller = new AbortController();
  const fetchUserData = async () => {
    setLoading(true);  
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1',{signal:abortCntroller.signal});
      
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

  return () => {
      abortController.abort(); 
      console.log('Cleanup: запрос отменён');
    };
  }, [userId]); 


  const handleRefresh = () => {
   
    const randomId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomId); 
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <h2>User Profile (ID: {userId})</h2>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
      
      {/* Кнопка Refresh */}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default UserProfile;