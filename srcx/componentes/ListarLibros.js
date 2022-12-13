
import React, { useState, useEffect } from 'react';
import '../scss/listalibros.scss'
import { useUsuario } from '../context/context';
import { MAX_LONG_TITULO } from '../definiciones'
import { FormBuscar } from './FormBuscar';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'
export const ListarLibros = () => {

  const [libros, setLibros] = useState({ idx: 0, buscar: '', tipo: '', total: 0, pag: 0, lista: [] });
  const { estadoWeb, setUsuario } = useUsuario()          //usuario que viene del contexto
  const max = 40;  // maximo número de elemtos que se pueden biscar


  function get_lista(bus,tipoB,inic=libros.idx,actPg=libros.pag) {
    const par = `?user=${estadoWeb.usuario}&max=${max}&istart=${inic}&q=${tipoB.length===0? encodeURI(bus) : tipoB+encodeURI(bus)}`;

    fetch('http://localhost:3002/consulta' + par, { credentials: 'include' })
      .then(res => res.json())
      .then(lbr => {
        console.log(lbr);
        if ((lbr.total || null) && (lbr.total < 0)) {
          setUsuario({ usuario: '', pagina: 0 });
          window.location.assign('http://localhost:3000/bibliotecas'); // ... si la sesión ha expirado vuelvo a la página de inicio sin USUARIO logeado.
        }
        if (lbr.total || null) setLibros({ idx: inic, total: lbr.total, buscar: bus, tipo: tipoB, pag: ((bus===libros.buscar && bus.length) && (libros.tipo===tipoB)) ? actPg : 0,  lista: lbr.resp }); 
        else setLibros({ idx: 0, total:0, lista: [], buscar: bus, tipo : tipoB ,pag: 0 })
      })
      .catch(error => console.error(error))
  }

  // carga la nueva página, para ello necesita cargar los datos
  const cambioPagina =(e) => {
    let pg=0;
    e.preventDefault();
    pg = parseInt(e.currentTarget.href.charAt(e.currentTarget.href.length - 1)); // obtener la página seleccionada.
    get_lista(libros.buscar,libros.tipo,pg*max,pg)

  }

   // PAGINACIÓN DE LOS RESULTADOS...
  const get_paginas = (total,sel=0) => {
      let acum = []
      let maximo = Math.ceil(total / max)
     
      for(var i=0; i < (maximo>25? 25 : maximo) ; i++) {

        acum.push(<li  key={i} className={ i !== sel ? "page-item" : "page-item disabled"}><a className="page-link" href={i} onClick={(e)=>cambioPagina(e)}>{i+1}</a></li>)

      }
    return (
        <nav aria-label="...">
          <ul className="pagination pagination-sm pagination justify-content-end">
            {acum.map((e) => e)} 
        </ul>
      </nav>
    )
  }

  return (
    <>
      <section className='contenedor-busqueda-full'>
        <div className='contenedor-busqueda'> <FormBuscar lista={get_lista} num={libros.total} buscar={libros.buscar} tipo={libros.tipo} /></div>
        <div className='contenedor-paginas'>{ libros.total > max? get_paginas(libros.total,libros.pag) : <></>}</div>
        <div className='contenedor-libros'>
          {libros.lista.map((e, idx) => <Libro key={idx}  titulo={e.titulo} imagen={e.imagen.thumbnail} descripcion={e.descripcion} autor={e.autores} ident={e.id}/>)}
        </div>
      </section>

    </>
  )
}


export const Libro = ({ imagen, titulo, descripcion, autor,ident }) => {

  useEffect(() => {
    console.log('Key libro=')

  }, [])
  return (
    <section className='ficha-libro'>
      <Link to={`/libro/${ident}`} target={'_blank'}><img src={imagen} alt={titulo} /></Link>
      <div className='ficha-libro__titulo'>{titulo.length > MAX_LONG_TITULO ? titulo.substring(0, MAX_LONG_TITULO) + ' ...' : titulo}</div>
      <div className='ficha-libro__autor'>{autor.map((aut,idx) => <div key={idx}>{ idx === autor.length -1? aut : aut+', '}</div>)}</div>
    </section>
  )
}

/*
export default function BooksLayouts() { return ( <> <ul> <li> <Link to='/books/1'>Book 1</Link> </li> <li> <Link to='/books/2'>Book 2</Link> </li> <li> <Link to='/books/3'>Book 3</Link> </li> <li> <Link to='/books/new'>New Book</Link> </li> </ul> <Outlet /> <div style={{ height:"15px", width:"100%", backgroundColor:"#000" }}></div> </> ) } 


//import React from 'react' 
import { useParams } from 'react-router-dom' 
export default function Book() { 
  const {id} = useParams() let bookName = '' if ( id === '1' ) { 
    bookName = "Alicia En El País De Las Maravilas" } 
    else if ( id === '2') { bookName = "Dune" } 
    else { bookName = "Fahrenheit 451" } 
    
    
    return ( <h1>{bookName}</h1> ) 
  
  } 



*/



