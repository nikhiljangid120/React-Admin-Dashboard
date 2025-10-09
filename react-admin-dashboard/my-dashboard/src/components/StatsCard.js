import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <div>
        <h4 style={{ fontSize: '1rem', color: '#6b7280' }}>{title}</h4>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;