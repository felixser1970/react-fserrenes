import React, { useEffect, useRef,useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../scss/estilos.scss'
import { useUsuario } from '../context/context';
import { PAGINA_REGISTRO } from '../definiciones'

export const Encabezado = (props) => {
  return (
    <>
      <header className='banner'>
        <div className='banner__titulo'>{props.children}</div>
        <div className='banner__comentario'>{props.comentario}</div>
      </header>
      
    </>
  )
}

export const Usuario = (props) => {
  const {estadoWeb,login,logout,setUsuario} = useUsuario()          //usuario que viene del contexto
  const userRf = useRef('');
  const passRf = useRef('');

  //useEffect(() => {userRf.current.value = ''; passRf.current.value = ''});

  function Registro_user(e,idx) {
    e.preventDefault();
    setUsuario({usuario:estadoWeb.usuario,pagina:idx})

  }


  return (
    <>
      <section className='usuario'>
        <div className='usuario__nombre'>{props.children}</div>
        { !estadoWeb.usuario.length?
            <> 
              <form className='usuario__form'>
                    <label htmlFor='user'>Usuario</label>
                    <input type="text" name='user' id='user' ref={userRf} defaultValue={''} placeholder='usuario?' required />
                    <label htmlFor='pass' name='pass' id='pass'  required >Contraseña</label>
                    <input type="password" name='nombre' id='nombre' ref={passRf} defaultValue={''} required />
                    <input type="submit" name='go' id='go' value='ACCESO' onClick={ e => login(e, userRf.current.value, passRf.current.value)} />
              </form>
              <div className='usuario__registro'><a  href='#' onClick={e => Registro_user(e, PAGINA_REGISTRO)}>Registro&nbsp;</a> </div>
              </>
            :
            <>
              <div className='usuario__noform'></div>
              <div className='usuario__cerrar'><a href="#" onClick={logout}>Cerrar&nbsp;&nbsp;</a></div>
            </>
        }
        
      </section>
      
    </>
  )

}

