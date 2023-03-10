//1.Import
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import  App from './App'
//2.Access of root
const el = document.getElementById('root');
//3.Create variable of root
const root = ReactDOM.createRoot(el);
//4.render app
root.render(<App/>);