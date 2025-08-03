import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 90 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Ravindra Jadeja', score: 65 },
  { name: 'Hardik Pandya', score: 35 },
  { name: 'MS Dhoni', score: 95 },
  { name: 'Shikhar Dhawan', score: 72 },
  { name: 'Rishabh Pant', score: 60 },
  { name: 'Jasprit Bumrah', score: 70 },
  { name: 'Bhuvneshwar Kumar', score: 55 },
  { name: 'Yuzvendra Chahal', score: 88 },
];

const ListofPlayers = () => {
  const filtered = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70:</h2>
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
