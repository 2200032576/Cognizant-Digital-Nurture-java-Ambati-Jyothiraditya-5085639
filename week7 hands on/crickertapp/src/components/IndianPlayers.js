import React from 'react';

const T20players = ['Virat', 'Rohit', 'Pant', 'Hardik'];
const RanjiTrophyPlayers = ['Pujara', 'Iyer', 'Ishant', 'Saha'];

const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

const IndianPlayers = () => {
  const oddTeam = mergedPlayers.filter((_, i) => i % 2 === 0);
  const evenTeam = mergedPlayers.filter((_, i) => i % 2 !== 0);

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
