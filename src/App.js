import React, { useState } from 'react';
import DraggableConf from './components/draggable'
import logo from './logo.svg';
import './App.css';

function App() {
  const [nick, setNick] = useState('')
  const [meet, setMeet] = useState(false)

  if (meet) {
    return <DraggableConf nick={nick}/>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coloque seu <code>Nome</code> e vamos la.
        </p>
        <input type="text" onChange={e => setNick(e.target.value)}></input>
        <a
          onClick={() => setMeet(true)}
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Bora
        </a>
      </header>
    </div>
  );
}

export default App;
