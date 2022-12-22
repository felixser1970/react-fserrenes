import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../scss/estilos.scss'
import { useUsuario } from '../context/context';
import { PAGINA_DESCARGA } from '../definiciones'

export const ListaBiblio = (props) => {
  const  [milista,setListaBiblio] = useState([]);       // Es visible????
  const {estadoWeb, setUsuario,menu,setMenu} = useUsuario();                     // necesito obtener el estado y la página
  const pgx = PAGINA_DESCARGA;


  const fetchData = () => {
    fetch("http://localhost:3002/bibliotecas", { credentials : 'include' })
    .then(res => res.json())
    .then(data =>  { 
      if((data.u || null) &&  data.u === null ) {
        setUsuario({usuario:'',pagina: estadoWeb.pagina === pgx? 0: estadoWeb.pagina});
        setMenu([...menu]); 
      }   
      setListaBiblio(data.b)  
    })
  }

  useEffect(() => {  
    fetchData() ; 

  
  },[]);  


  return (
    <>
    <main className="biblio">
        {milista.map( e => <Biblio key={e.id} titulo={e.nombre} imagen={e.imagen} descripcion={e.descripcion} />) }
      </main>
    </>
  )
}

const Biblio = ({titulo,imagen,descripcion}) => {

  return (
    <>
      <div className='ficha-biblio'>
          <div className="imagen"><img src={imagen} alt={titulo} /></div>
          <div className="titulo">{titulo}</div>
          <div className="cuerpo">{descripcion}</div>
      </div>
    </>
  )
}

