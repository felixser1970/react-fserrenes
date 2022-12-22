import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/estilos.scss'
import { Uprov } from './context/context';
import {BrowserRouter} from 'react-router-dom'
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Uprov> 
        <App/>
    </Uprov>
  </BrowserRouter>
  </React.StrictMode>
);

