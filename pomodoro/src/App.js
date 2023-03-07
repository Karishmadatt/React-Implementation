import React, { useState , useRef} from 'react';
import './App.css';

function padtime (time){
  // console.log('try');
  return time.toString().padStart(2,'0');
}


export default function App() {
  
  const intervalRef = useRef(null);
  const[title , settitle] = useState('Start the timmer!')
  const[timeleft , settime] = useState(10);
  const[isrunning , setisrunning] = useState(false);
  
  function startTimmer(){

   if(intervalRef.current!=null) return;

   settitle(`You're doing great!`);
   setisrunning(true);
    intervalRef.current = setInterval(()=>{
         settime (timeleft=>{
          if(timeleft>=1) return timeleft-1
          //reset the timer;
          resetTimmer();
          return 0;
        });
    },1000)
    console.log(intervalRef.current);
  }

function stopInterval(){

  if(intervalRef.current==null) return;

  settitle('Keep it up!');
  // console.log(intervalRef.current);
  clearInterval(intervalRef.current);
  setisrunning(false);
  intervalRef.current=null;
}

function resetTimmer(){
  settime('Ready to go for round 2 ?');
  clearInterval(intervalRef.current);
  settime(25*60);
  setisrunning(false);
  intervalRef.current=null;
}

 const min = padtime(Math.floor(timeleft/60));
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
       {!isrunning && <button onClick={startTimmer}>Start</button> }
       {isrunning && <button onClick={stopInterval}>Stop</button> }
        <button onClick={resetTimmer}>Reset</button>
      </div>
    </div>
  );
}
