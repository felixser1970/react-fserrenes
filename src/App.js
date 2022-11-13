import React, { useState, useRef, useEffect } from 'react'
import{ Tarealist } from  './componentes/Tarea'
import { v4 as uuidv4 } from 'uuid'
//import Tarea from './componentes/Tarea';

const  LOCAL_STORAGE_KEY = 'tareasApp.tareas'

function App() 
{
  const [tareas,setTarea] = useState([]);
  const tareaNameRef = useRef();
  // .... almacenaiento del estado
  useEffect(() =>{
    const tareasAlmacenadas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(tareasAlmacenadas) setTarea(tareasAlmacenadas)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tareas))
  },[tareas])

  // funcio que actualiza todas las tareas
  function accionarTarea(id) {
    const newTareas = [...tareas]
    const myTarea = newTareas.find(tarea => tarea.id === id) // ... obtengo referencia al objeto.
    myTarea.isCompleted = !myTarea.isCompleted               // ... cambio el valor
    setTarea(newTareas)                                      // ... almaceno todo con los cambios. (renderizar????)
  }
  // nuevo nombre de la tarea
  function nameTarea(id, nombre) {
    const newTareas = [...tareas]
    const myTarea = newTareas.find(tarea => tarea.id === id) // ... obtengo referencia al objeto.
    if(nombre.length) myTarea.name = nombre                  // ... cambio el nombre de cada tarea ....
    setTarea(newTareas)                                      // ... almaceno todo con los cambios. (renderizar????)
  }

  function handleAddItem(e) {
    const name =  tareaNameRef.current.value;
    if(name === '') return;

    setTarea(prevTareas => { return [...prevTareas, {id: uuidv4(), name: name,isCompleted: false}]}); // añadimos un elemento
    tareaNameRef.current.value = null;  // anual el valor, lo pone vacío...

  }
  function handleLimpiarTareas() {
    const newTareas = tareas.filter(tarea => !tarea.isCompleted)
    setTarea(newTareas)
  }
  return (
    <>
      <h1> Lista de Tareas</h1>
      <Tarealist  tareas={tareas} accionarTarea={accionarTarea} nameTarea={nameTarea}/>
      <input ref={tareaNameRef} type="text" />
      <button onClick={handleAddItem}>Agregar Item:</button>
      <button onClick={handleLimpiarTareas}>Limpiar Completos:</button>
      <div>{tareas.filter(tarea =>!tarea.isCompleted).length} tareas por hacer</div>
    </>
  );
}

export default App;

/*
 {id: 1, nombre :'tarea 1',isCompleted: false},
    {id: 2, nombre :'tarea 2',isCompleted: false}, 
    {id: 3, nombre :'tarea 3',isCompleted: false}
*/
