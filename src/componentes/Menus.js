import React, { useEffect, useRef,useState } from 'react';
import '../scss/estilos.scss'
import { useUsuario } from '../context/context';


export const Menus = ({lista}) => {
 
  const {estadoWeb,setUsuario,menu} = useUsuario()

  // función para satar a otro menu.
  function cambioMenu(e, idx) {
    e.preventDefault();
    setUsuario({usuario: estadoWeb.usuario, pagina:idx})
  }

  return (
    <>
      <section className='menus'>
        <ul>
          {
            estadoWeb.usuario.length? menu.map((e,idx) => <li key={idx} style={{display: 'inline', marginRight: '30px'}}><a href="#" onClick={e => cambioMenu(e, idx)}>{e.titulo}</a></li>)
            : (menu.filter((el) => !el.private )).map((e,idx) => <li key={idx} style={{display: 'inline', marginRight: '30px'}}><a href="#" onClick={e => cambioMenu(e, idx)}>{e.titulo}</a></li>) 
          }
        </ul>
      </section>
    
    </>

  )
  
}