import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      
      try {
     
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: abortController.signal }
        );
        
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        
        const data = await response.json();
        setUser(data);
        setLoading(false);
        
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Запрос был отменён');
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      abortController.abort();
      console.log('Cleanup: запрос отменён');
    };
  }, [userId]); 
  
  /* 
    userId находится в массиве зависимостей useEffect, потому что:
   1. useEffect должен перезапускаться каждый раз, когда userId изменяется
   2. Это гарантирует, что мы загружаем данные НОВОГО пользователя
  3. Без userId в зависимостях, компонент загрузит данные только один раз при монтировании и не будет реагировать на изменения userId
  4. React предупредит нас, если мы используем внешнюю переменную (userId) внутри useEffect, но не добавим её в массив зависимостей
   */

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
    </div>
  );
};

export default UserProfile;