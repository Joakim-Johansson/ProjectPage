import React from 'react';

function Team() {
  const members = [
    { name: 'Fox Hamrén', info: '' },
    { name: 'Filip Palmqvist', info: '' },
    { name: 'Joakim Johansson', info: '' },
    { name: 'Meilin Zhu', info: '' },
    { name: 'Vilma Van Der Schoot', info: '' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px' }}>
      {members.map((member, index) => (
        <div key={index} style={{ flex: 1, padding: '5px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', margin: '5px' }}>
          <h4>{member.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Team;
