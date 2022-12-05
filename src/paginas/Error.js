import React from 'react'
import { Link } from 'react-router-dom';

import '../scss/error.scss'

export const Error = ()  => {
  return (
    <>
        <h1>404 Página No Encontrada.</h1>
        <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
        <section class="error-container">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
        </section>
      <div className="link-container">
        <Link to="/">VOLVER A LA PÁGINA DE INICIO</Link>
      </div>
      
    </>
  )
    
}
