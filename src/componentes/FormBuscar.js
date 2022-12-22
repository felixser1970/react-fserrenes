import {React, useRef, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export const FormBuscar = (props) => {
  const  [buscar, setBuscar] = useState({bus:props.bus,total: props.num,tipo: props.tipo});
  const busRef = useRef(props.buscar)   // ... número de elementos encontrado y cadena de búsqueda

  function validar(e) {
    const  bus = busRef.current.value
    e.preventDefault()
    if (bus.length)  props.lista(bus,e.currentTarget.tipo.value)
  }
  useEffect(() => {
    busRef.current.value = props.buscar;

  },[props.buscar,props.tipo])

  return (
  <>
  <h2> Consulta de Libros</h2>
  <p></p>
  <Form onSubmit={(e) => validar(e)}>
    <Form.Group  className='row'  controlId="formBasicCheckbox">
      <Form.Label className='col-lg-2' required >Buscar </Form.Label>
      <Form.Control ref={busRef} className='col-lg-10' type="search" placeholder="Todos los campos" />
    </Form.Group>
    <Form.Group>
      <p></p>
      <Form.Label><b>Tipos de Búsquedas:</b> </Form.Label>
      <br></br>
      <Form.Check  name='tipo'  label= 'Titulo' inline  type='radio'  value={ "intitle:"} defaultChecked ={props.tipo === "intitle:"} />
      <Form.Check  name='tipo'  label= 'Autor' inline   type='radio'   value={ "inauthor:"}  defaultChecked ={props.tipo === "inauthor:"}/>
      <Form.Check  name='tipo'  label= 'Isbn' inline    type='radio'   value={ "isbn:"}  defaultChecked={ props.tipo === "isbn:"} />
      <Form.Check  name='tipo'  label= 'Todos' inline   type='radio'   value={ ""}  defaultChecked={ props.tipo === ""} />
    </Form.Group>
       <p></p><p></p>
      <Button variant="primary" className='container-fluid text-center' type='submit'>
        Buscar
      </Button>
  </Form>
    <p className='contenedor-busqueda__resultado'>{`Encontrados: ${props.num}` }</p>
  </>
    
  );
}
