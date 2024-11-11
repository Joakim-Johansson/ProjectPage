import React from 'react';

function Team() {
  const members = [
    { name: 'Fox Hamrén', info: 'fox.hamren@gmail.com' },
    { name: 'Filip Palmqvist', info: 'fille.palmqvist@icloud.com' },
    { name: 'Joakim Johansson', info: 'joakimjocke199@gmail.com' },
    { name: 'Meilin Zhu', info: 'meilin77@gmail.com' },
    { name: 'Vilma Van Der Schoot', info: 'vdschoot@hotmail.se' },
  ];

  return (
    <div style={{ width: '70%', display: 'flex', justifyContent: 'center', padding: '12px', margin: '0 auto' }}>
      {members.map((member, index) => (
        <div key={index} style={{ flex: 1, padding: '5px', textAlign: 'center', margin: '5px' }}>
          <h4 style={{ fontSize: '14px', margin: '5px 0' }}>{member.name}</h4>
          <p style={{'fontSize': 10}}>{member.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Team;
