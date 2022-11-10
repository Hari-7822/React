import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './js/App';
import Btn from './js/btns';
// import Bg from './js/three';


import './css/index.css';



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    
    <App />

    <Btn />

  </React.StrictMode>

);

//  class Bg extends Component {
    
//     const cam = new THREE.PerspectiveCamera

//  }
