import React, { useState } from 'react';
import './App.css';

function padtime (time){
  console.log('try');
  return time.toString().padStart(2,'0');
}

export default function App() {

 const[timeleft , settime] = useState(25*60);

 const min = Math.floor(timeleft/60);
 const sec = padtime(timeleft - min*60);

  return (
    
    <div className="app">
      <h2>Pomodoro!</h2>
        {/* <p>hello</p>  */}
      <div className="timer">
        <span>{min}</span>
        <span>:</span>
        <span>{sec}</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
