import { render } from '@testing-library/react';
import react from 'react'
import  ReactDOM  from 'react-dom/client';
import App from  './App.js';

const e1 = document.getElementById('root');

const root = ReactDOM.createRoot(e1);

root.render(<App/>);
