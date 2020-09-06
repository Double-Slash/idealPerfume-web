import React from 'react';
import './App.css';
import Moving from './Moving'
import frame from './image/1596783494993.png'


function App() {
  return(
  <div className = 'picture'>
    <div className = 'App'>
      <img className = 'frame' src = {frame} alt = 'frame'></img>
        <Moving className = 'bird_Moving'></Moving>
    </div>
  </div>
  );
}

export default App;
