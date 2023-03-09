import React,{useState} from 'react';
import { marked } from 'marked';
import './App.css';

export default function App() {
  const[markdown,setmarkdown] = useState('#sup');
  function handlechange(e){
      setmarkdown(e.target.value);
  }
  return (
    <div className="app">
      <textarea onChange={handlechange} value={markdown}/>

      <div className="preview" dangerouslySetInnerHTML={{__html:marked(markdown)}} />
    </div>
  );
}
