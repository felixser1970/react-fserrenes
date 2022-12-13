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
      // ATENCIÓN NO HAY usuario acreditado (no hay sesión abierta porque ha expirado su duración, OCULTO LA OPCION DE CONSULTAR LIBROS EN EL MENU Y
      // VUELVO AL INICIO.
      if((data.u || null) &&  data.u === null ) {
        setUsuario({usuario:'',pagina: estadoWeb.pagina === pgx? 0: estadoWeb.pagina});
        setMenu([...menu]);  // oculta las opciones si NO HAY SESSIÓN EN EL SERVIDOR PARA UN USUARIO.
      }   
      console.log('Fin sesion='+data.u);
      setListaBiblio(data.b)  // seteo la lista de bibliotecas  con los datos recibidos del API privada...
    })
  }

  useEffect(() => {  
    fetchData() ; 

  
  },[]);  // Este proceso se ejecuta  solo una vez, YA QUE TIENE UNA MATRIZ VÁCIO. En caso contrario se haria en cada enderizado


 // NOTA: Si no hay un usuario acreditado, se devuelve null, en caso contrario el nombre de usuario. se devuelve en milista.u
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

