import React from 'react';
import OfficeList from './components/OfficeList';
import officeImg from './components/assets/office.jpg';


function App() {
  return (
    <div className="App">
      <h1>Office Space Rentals</h1>
      <img src={officeImg} alt="Office" style={{ width: "400px" }} />
      <OfficeList />
    </div>
  );
}

export default App;
