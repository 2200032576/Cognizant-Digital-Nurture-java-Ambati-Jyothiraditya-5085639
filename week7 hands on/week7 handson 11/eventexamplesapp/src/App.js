import React from 'react';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventExample from './components/SyntheticEventExample';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Events Demo</h1>
      <Counter />
      <WelcomeButton />
      <SyntheticEventExample />
      <CurrencyConverter />
    </div>
  );
}

export default App;
