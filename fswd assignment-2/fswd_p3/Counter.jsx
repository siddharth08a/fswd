import React, { useState } from 'react';

/**
 * Question 3: Counter Component
 * Creates a simple counter using React which increments, decrements,
 * and resets the count dynamically on-screen as the user clicks buttons.
 * Uses React state and onClick handlers.
 */
function Counter() {
  // State hook to track counter value
  const [count, setCount] = useState(0);

  // Click handler functions
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container" style={containerStyle}>
      <h2>Counter: {count}</h2>
      <div style={buttonGroupStyle}>
        <button onClick={handleIncrement} style={btnPrimary}>Increment</button>
        <button onClick={handleDecrement} style={btnSecondary}>Decrement</button>
        <button onClick={handleReset} style={btnDanger}>Reset</button>
      </div>
    </div>
  );
}

// Styling definitions
const containerStyle = {
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  padding: '24px',
  maxWidth: '350px',
  margin: '20px auto',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '16px'
};

const btnPrimary = {
  padding: '8px 16px',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600'
};

const btnSecondary = {
  padding: '8px 16px',
  backgroundColor: '#64748b',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600'
};

const btnDanger = {
  padding: '8px 16px',
  backgroundColor: '#ef4444',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600'
};

export default Counter;
