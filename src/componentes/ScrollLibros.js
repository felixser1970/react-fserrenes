import React, { useState, useEffect } from 'react';
import '../scss/listalibros.scss'
import { useUsuario } from '../context/context';
import { MAX_LONG_TITULO } from '../definiciones'
import { FormBuscar } from './FormBuscar';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
//import 'bootstrap/dist/css/bootstrap.min.css'
export const ScrollLibros = () => {

  const [libros, setLibros] = useState({ idx: 0, buscar: '', tipo: '', total: 0, pag: 0, lista: [] });
  const { estadoWeb, setUsuario } = useUsuario()          //usuario que viene del contexto
  const max = 40;         // maximo número de elemtos que se pueden biscar


  function get_lista(bus,tipoB,inic=libros.idx,actPg=libros.pag) {
    const par = `?user=${estadoWeb.usuario}&max=${max}&istart=${inic}&q=${tipoB.length===0? encodeURI(bus) : tipoB+encodeURI(bus)}`;

    fetch('http://localhost:3002/consulta' + par, { credentials: 'include' })
      .then(res => res.json())
      .then(lbr => {
        //console.log(lbr);
        //alert('IDX='+libros.idx+' TOTAL='+libros.total+'PAR= '+par);
        if ((lbr.total || null) && (lbr.total < 0)) {
          setUsuario({ usuario: '', pagina: 0 });
          window.location.assign('http://localhost:3000/bibliotecas'); // ... si la sesión ha expirado vuelvo a la página de inicio sin USUARIO logeado.
        }
        if (lbr.total || null) setLibros({ idx: inic, total: lbr.total, buscar: bus, tipo: tipoB, 
                                            pag: libros.pag++,  lista: [...libros.lista, ...lbr.resp] }); 
        else setLibros({ idx: 0, total:0, lista: [], buscar: bus, tipo : tipoB ,pag: 0 })
      })
      .catch(error => console.error(error))
  }
   function nuevaPagina() {
    if(libros.idx+max < libros.total) {
      get_lista(libros.buscar,libros.tipo,libros.idx+max)
    } else  console.log('FINAL');
   }

  return (
    <>
      <section className='contenedor-busqueda-scroll'>
        <div className='contenedor-busqueda'> <FormBuscar lista={get_lista} num={libros.total} buscar={libros.buscar} tipo={libros.tipo} /></div>
        <p></p>
  
        <InfiniteScroll
            dataLength={libros.lista.length} //This is important field to render the next data
            next={nuevaPagina}
            hasMore={libros.idx+max < libros.total? true : false}
            loader={<h4>Cargando ...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Se han Cargado {libros.lista.length} LIBROS con todos los Datos.</b>
              </p>
            }
          
        >
          <div className='contenedor-libros-scroll'>
            {libros.lista.map((e, idx) => <Libro key={idx}  titulo={e.titulo} imagen={e.imagen.thumbnail} descripcion={e.descripcion} autor={e.autores} ident={e.id}/>)}
          </div>
        </InfiniteScroll>
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