import React, {useState} from 'react';

const StepCounter = ({initialValue = 0, step = 1, goal = 1000}) => {
  const [steps, setSteps] = useState(initialValue);
  const [history, setHistory] = useState([]);
  
  const addSteps = () => {
   const oldSteps = steps;
    const newSteps = steps + step;
    setSteps(newSteps);
    addToHistory(`+${step}`, oldSteps, newSteps); 
  };
  
  const subtractSteps = () => {
     const oldSteps = steps;
    const newSteps = Math.max(0, steps - step);
    setSteps(newSteps);
    addToHistory(`-${step}`, oldSteps, newSteps);
  };
  
  const resetSteps = () => {
     const oldSteps = steps;
    setSteps(initialValue);
    addToHistory('Сброс', oldSteps, initialValue);
  };
  const clearHistory = () => {
    setHistory([]);
  };
  const addToHistory = (action, oldValue, newValue) => {
  const newEntry = {
    action: action,           
    oldValue: oldValue,       
    newValue: newValue,       
    timestamp: new Date().toLocaleTimeString() 
  };
  setHistory(prev => [newEntry, ...prev].slice(0, 5)); 
};


  const progress = Math.min((steps / goal) * 100, 100);
  
  return (
    <div>
      <h1>{steps.toLocaleString()} из {goal.toLocaleString()}</h1>
      <p>{progress.toFixed(1)}%</p>
      <p>Начальное значение: <strong>{initialValue}</strong></p>
      <p>Шаг: <strong>{step}</strong></p>
      <div>
        <button onClick={subtractSteps}>
          -{step}
        </button>
        <button onClick={addSteps}>
          +{step}
        </button>
        <button onClick={resetSteps}>
          Сбросить
        </button>
      </div>
      <ul>
            {history.map((entry, index) => (
              <li key={index}>
                <span>[{entry.timestamp}]</span>
                <span>{entry.action}</span>: 
                <span> {entry.oldValue} → {entry.newValue}</span>
              </li>
            ))}
          </ul>
             <button onClick={clearHistory}>
            Очистить историю
          </button>
    </div>

  );
};

export default StepCounter;