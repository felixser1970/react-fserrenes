import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import { Encabezado, Usuario, Menus } from './encabezado.js'
import { Pie } from './Pie.js'
import { ListaBiblio } from './ListaBiblio.js';
import { BiblioMadrid } from './BiblioMadrid';
import { Registro } from './Registro.js';
import { ListarLibros } from './ListarLibros';
import { ScrollLibros } from './ScrollLibros';
import { useUsuario } from '../context/context';
import { PAGINA_REGISTRO, PAGINA_INICIO, PAGINA_DESCARGA, PAGINA_MADRID, SCROLL_INFINITO } from '../definiciones'



function Web() {
  const { estadoWeb } = useUsuario();
  const miUser = <Usuario>{estadoWeb.usuario.length ? estadoWeb.usuario : 'Usuario Anónimo'}</Usuario>

  // ... carga el componente que se precise para esa página
  const loadComponente = (idx, par = null) => {
    var myComp = null;

    switch (idx) {
      case PAGINA_INICIO:              // ...listado de las mayores bibliotecas
        myComp = <ListaBiblio />
        break;
      case PAGINA_REGISTRO:
        myComp = <Registro />        // ... registro de usuarios.
        break;
      case PAGINA_MADRID:
        myComp = <BiblioMadrid />
        break;
      case PAGINA_DESCARGA:
        myComp = <ListarLibros />
        break;
      case SCROLL_INFINITO:
        myComp = <ScrollLibros />
        break;

      default:
    }
    return (myComp)
  }

  return (
    <>
      <section className='contenedor'>
        <Encabezado comentario='Si te gusta leer; esta es tu Página.'>BIBLIOTECA ATENEA</Encabezado>
        {estadoWeb.pagina !== PAGINA_REGISTRO ? miUser : <></>}
        <Menus />
        <p></p>
        {loadComponente(estadoWeb.pagina)}
        <Pie>Félix Serrenes</Pie>
      </section>

    </>
  );
}

export default Web;
