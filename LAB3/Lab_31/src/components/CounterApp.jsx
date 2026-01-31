import React from 'react';
import StepCounter from './StepCounter';

const CounterApp = () => {
  return (
    <div>
      
      <div>
        <div>
          <StepCounter 
            initialValue={0} 
            step={1} 
            goal={1000} 
          />
        </div>
        
        <div>
          <StepCounter 
            initialValue={10} 
            step={5} 
            goal={2000} 
          />
        </div>
      </div>
    </div>
  );
};

export default CounterApp;