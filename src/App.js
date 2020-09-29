import React from 'react';
import './App.css';
import { SearchContainer } from './Components/SearchContainer';
// import { ResultContainer } from './Components/ResultContainer';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Hey there !</h1>
        <SearchContainer/>
      </header>
    </div>
  );
}

export default App;
