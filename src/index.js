import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './js/App';
import Btn from './js/btns';
import Three from './js/three';


import './css/index.css';



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    
    <App />

    <Btn />

    <Three/>

  </React.StrictMode>

);
