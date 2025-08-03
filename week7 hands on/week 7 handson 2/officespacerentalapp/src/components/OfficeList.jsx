import React from 'react';
import OfficeCard from './OfficeCard';

const offices = [
  { name: "Tech Hub", rent: 55000, address: "Hyderabad" },
  { name: "Startup Nest", rent: 75000, address: "Bangalore" },
  { name: "WorkBay", rent: 45000, address: "Mumbai" }
];

const OfficeList = () => {
  return (
    <div>
      {offices.map((office, index) => (
        <OfficeCard key={index} {...office} />
      ))}
    </div>
  );
};

export default OfficeList;
