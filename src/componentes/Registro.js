
import React, {useState} from 'react';
import '../scss/registro.scss'
import { useUsuario } from '../context/context';
import {NUM_CHARS_USER,NUM_CHARS_PASS,NUM_CHARS_NOMBRE} from '../definiciones'


export const Registro = () => {
  const [resultado, setResultado] = useState({txt:'',okUser:false,rtColor:'red'});
  let inUser = false;
  
  function evaluar(e) {

    const par = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        user    :e.target.usuario.value, 
        pass    :e.target.pass1.value, 
        nombre  :e.target.nombre.value
      }),
      credentials : 'include'
    }

    e.preventDefault();
    if(e.target.usuario.value.length <= NUM_CHARS_USER || !resultado.okUser) setResultado({txt:'El usuario NO es válido.',okUser:false,rtColor:'red'})
    else if(e.target.pass1.value !== e.target.pass2.value || e.target.pass1.value.length<= NUM_CHARS_PASS ) {
      setResultado({txt:'Las contraseñas no coinciden.',okUser:false,rtColor:'red'})
    }
    else if(e.target.nombre.value.length <= NUM_CHARS_NOMBRE) {
      setResultado({txt:'Nombre y Apellidos con longitud menor que 4.',okUser:false,rtColor:'red'})
    }
    else {
      inUser=true;
      fetch("http://localhost:3002/registro",par)
      .then(res    =>  res.json())
      .then(data   =>  {
        inUser=false;
        if((data || null) && (data.st.length))  setResultado({txt:'Bienvenido, ¡Registro Completado!',okUser:true, rtColor: 'green'}) 
        else setResultado({txt:'Usuario YA existe.',okUser: false, rtColor: 'red'})
      })
      .catch(error =>  {inUser=false; setResultado({txt:'Error En el Regisro.',okUser:false, rtColor: 'red'})})
    }
  }

  function checkUser(e) {

    const par = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ user:e.target.value}),
      credentials : 'include'
    }

    e.preventDefault();
    if ( !inUser && e.target.value.length > NUM_CHARS_USER ) {
      inUser=true;
      fetch("http://localhost:3002/check",par)
      .then(res    =>  res.json())
      .then(data   =>  {
        inUser=false;
        if((data || null) && (data.st.length))  setResultado({txt:'Usuario Válido (No existe).',okUser:true, rtColor: 'green'}) 
        else setResultado({txt:'Usuario YA existe.',okUser: false, rtColor: 'red'})
      })
      .catch(error =>  {inUser=false; setResultado({txt:'Error en servidor',okUser:false, rtColor: 'red'})})
    }
  }

  return (
    <>
      <section className='contenedor-registro'>
        <form className='registrobox' onSubmit={e => evaluar(e)}>
            <div className='registrobox__titulo'>Nuevo Usuario</div>
            <div   className='registrobox__campo'> 
                <label>Nombre y Apellidos</label>
                <span  className='material-icons mb18'>badge</span>
                <input name="nombre" type="text"  className="registrobox__campo--text"  placeholder='Identificación' required/>    
            </div>
            <div  className='registrobox__campo'>
                <label>Usuario</label>
                <span  className='material-icons mb18'>face</span>
                <input name="usuario" type="text"  className="registrobox__campo--text" onBlur={e =>checkUser(e) } placeholder='Usuario para autentificarse' required/>
            </div>
            <div className='registrobox__campo'>
              <label>Contraseña</label>
              <span className="material-icons mb18">lock_open</span>
              <input name="pass1" type="password"  className="registrobox__campo--text"  required />
            </div>
            <div   className='registrobox__campo'>
              <label>Repita Contraseña</label>
              <span className="material-icons mb18">lock_open</span>
              <input name="pass2" type="password"  className="registrobox__campo--text"  required/>
            </div>
            <div   className="registrobox__boton">
              <input type="submit" value={'Solicitar Registro'}/>
            </div>
            <div style={{color: resultado.rtColor}} className='registrobox__resultado'>
                {resultado.txt}
            </div>
        </form>
      </section>
        
    </>
    
  )
}
