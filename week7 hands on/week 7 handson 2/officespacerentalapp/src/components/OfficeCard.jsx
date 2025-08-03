import React from 'react';

const OfficeCard = ({ name, rent, address }) => {
  const rentStyle = {
    color: rent < 60000 ? 'red' : 'green',
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p style={rentStyle}>Rent: ₹{rent}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default OfficeCard;
