import React from 'react';
import './App.css';
import CloudMoving from './CloudMoving'
import frame from './image/1596783494993.png'
import ButterflyMoving from './ButterflyMoving'


function App() {
  return(
  <div className = 'picture'>
  <div className = 'App'>
    <img className = 'frame' src = {frame} alt = 'frame'></img> 
      <CloudMoving className = 'Cloud_Moving'></CloudMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
      <ButterflyMoving className = 'butterfly_Moving'></ButterflyMoving>
  </div>
 </div>
  );
}

export default App;
