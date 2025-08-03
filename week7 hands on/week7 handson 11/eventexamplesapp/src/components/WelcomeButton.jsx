import React from 'react';

function WelcomeButton() {
  const sayMessage = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>
  );
}

export default WelcomeButton;  // 👈 This is missing in your file
