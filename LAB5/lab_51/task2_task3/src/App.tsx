// src/App.tsx
import React from 'react';
import { User, Skill } from './types/types';
import UserCard from './components/UserCard';
import SkillList from './components/SkillList';
import './App.css';

function App() {
  const user: User = {
    name: 'Алия',
    email: 'aliya@example.com',
    age: 28
  };

  const skills: Skill[] = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'TypeScript', level: 'Intermediate' },
    { id: 3, name: 'JavaScript', level: 'Expert' },
    { id: 4, name: 'Node.js', level: 'Intermediate' },
    { id: 5, name: 'GraphQL', level: 'Beginner' },
    { id: 6, name: 'Docker', level: 'Beginner' }
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Профиль разработчика</h1>
      
      <UserCard user={user} isActive={true}>
        <div>       
        </div>
      </UserCard>

      <SkillList skills={skills} />
    </div>
  );
}

export default App;