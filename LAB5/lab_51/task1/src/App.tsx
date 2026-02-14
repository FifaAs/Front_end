import {User, Skill} from './types/types';
import './App.css'

function App() {
  const user: User = {
    name: 'Алия',
    email: 'aliya@example.com',
    age: 28
  };

  const skills: Skill[] = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'TypeScript', level: 'Intermediate' }
  ];

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Возраст: {user.age}</p>
      
      <h2>Навыки:</h2>
      {skills.map(skill => (
        <div key={skill.id}>
          {skill.name} - {skill.level}
        </div>
      ))}
    </div>
  );
}

export default App;