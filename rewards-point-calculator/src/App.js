
import React from 'react';
import CustomerRewards from './components/CustomerRewards/CustomerRewards';

/**
 * @component App
 * @desc Root component that renders the CustomerRewards component.
 */
function App() {
  return (
    <div className="App">
      <h1>Reward Calculator</h1>
      <CustomerRewards />
    </div>
  );
}

export default App;