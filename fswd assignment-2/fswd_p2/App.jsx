import React from 'react';
import StudentCard from './StudentCard';

/**
 * App component rendering the StudentCard component (Question 2)
 */
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>Student Information</h1>
      <StudentCard 
        name="Dharma Teja" 
        rollNo="1602-24-733-019" 
        branch="Computer Science & Engineering" 
      />
    </div>
  );
}

export default App;
