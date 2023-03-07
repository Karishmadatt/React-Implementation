import React, { useState } from 'react';
import './App.css';

function padtime (time){
  // console.log('try');
  return time.toString().padStart(2,'0');
}


export default function App() {
  
  const[title , settitle] = useState('Start the timmer!')
  const[timeleft , settime] = useState(10);
  
  function startTimmer(){
    setInterval(()=>{
         settime (timeleft=>{
          if(timeleft>=1) return timeleft-1
          //reset the timer;
          return 0;
        });
    },1000)
  }

 const min = Math.floor(timeleft/60);
 const sec = padtime(timeleft - min*60);

  return (
    
    <div className="app">
      <h2>{title}</h2>
        {/* <p>hello</p>  */}
      <div className="timer">
        <span>{min}</span>
        <span>:</span>
        <span>{sec}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimmer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
