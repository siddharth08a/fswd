import React from 'react';

/**
 * Question 2: StudentCard Component
 * A stateless functional component that displays a student's name, roll number,
 * and branch using a div, an h2, and two p tags.
 */
function StudentCard({ name, rollNo, branch }) {
  return (
    <div className="student-card" style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Roll Number:</strong> {rollNo}</p>
      <p><strong>Branch:</strong> {branch}</p>
    </div>
  );
}

// Inline styling for presentation
const cardStyle = {
  border: '1px solid #cbd5e1',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '350px',
  margin: '20px auto',
  backgroundColor: '#f8fafc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
};

export default StudentCard;
