import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Home from './pages/Home';

import Contato from './pages/Contato';

import Sobre from './pages/Sobre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contato />
  </React.StrictMode>
);


