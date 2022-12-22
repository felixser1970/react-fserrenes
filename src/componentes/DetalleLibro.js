
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import {Encabezado} from './encabezado.js'
import {Pie} from './Pie.js'
import '../scss/detallelibro.scss'

export default function DetalleLibro() {
  const {id} = useParams()
  const [detalle, setDetalle] = useState({})

  function getLibro(myid) {
    //const url = "https://www.googleapis.com/books/v1/volumes/?q=isbn:9788498382662&key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc";
    //const url2 = "https://www.googleapis.com/books/v1/volumes/p3QQjwEACAAJ?&key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc"

    fetch(`http://localhost:3002/libro/${myid}`, { credentials: 'include' })
      .then(res => res.json())
      .then(lbr => {
        if ((lbr.resp || null)) {
          setDetalle(lbr.resp);
       
        } else setDetalle({});
      
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getLibro(id)

  },[])

  return (
    <>
      <section className='contenedor'>
        <Encabezado comentario='Si te gusta leer; esta es tu Página.'>BIBLIOTECA ATENEA</Encabezado>
        <p></p>
         {detalle.imagen && (
                <section className='contenedor-detalle'>
                    <div className='contenedor-detalle__imagen'>
                        <img src={detalle.imagen.thumbnail} alt={detalle.titulo} /> 
                    </div>
                    <div className='contenedor-detalle__datos'>
                          <div className='contenedor-detalle__datos--titulo'> {detalle.titulo}</div>
                          <div className='contenedor-detalle__datos--categoria'>
                              <span>Categorías :    </span>{detalle.categoria.map((e,idx) => idx < detalle.categoria.length -1? e+', ' : e)}
                          </div>
                          <div className='contenedor-detalle__datos--editorial'>
                              <span>Editorial :     </span>{detalle.editorial}
                          </div>
                          <div className='contenedor-detalle__datos--autor'>
                              <span>Autores :     </span>{detalle.autores.map((e,idx) => idx < detalle.autores.length -1? e+', ' : e)}
                          </div>
                          <div className='contenedor-detalle__datos--paginas'>
                              <span>Páginas :     </span>{detalle.paginas}
                          </div>
                          <div className='contenedor-detalle__datos--fecha'>
                              <span>Año :     </span>{detalle.fecha}
                          </div>
                          <div className='contenedor-detalle__datos--pais'>
                              <span>Idioma :     </span>{detalle.pais}
                          </div>
                          <div className='contenedor-detalle__datos--isbn'>
                              <span>ISBN :     </span>
                              {detalle.isbn.map((e,idx) => {
                                const ix = `${e.identifier} (${e.type})  `;
                              
                                return idx < detalle.categoria.length -1? ix+',  ' : ix}
                              
                              )}
                          </div>
                    </div>
                    <div className='contenedor-detalle__descripcion'>
                        <div className='contenedor-detalle__descripcion--texto'>
                                  <span>Descripción :     </span>{detalle.descripcion.replace(/(<([^>]+)>)/gi, "")}
                        </div>
                    </div>
                
                </section>
              )
        }
        <Pie>Félix Serrenes</Pie>
      </section>
    </>
   
  )
}

