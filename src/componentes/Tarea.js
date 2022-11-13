import React, { useState, useRef}  from 'react'
var ReactDOM = require('react-dom');


 // ... componente editar ...
 // ---------------------------
function Edicion(props){
  const tareaNameRef = useRef();

  function cambiarTxt() {
    props.handleTarName(props.tarea.id, tareaNameRef.current.value)
  }
  
  return (
    <>
      <input type="text" ref={tareaNameRef} defaultValue={props.tarea.name}/>
      <button onClick={cambiarTxt}>Cerrar</button>
    </>
  )

}

// .... COMPNENTE TAREA ............
// ---------------------------------
function Tarea(props) {

  const [ver,setVer] = useState(false); // Es visible????

  function handleTarea() {
    setVer(false)
    props.accionarTarea(props.tareaIndividual.id) // es la función que le se pasa para registrar los cambios, en este caso el 'onchange' defaultChecked={false}
  }

  // esta función la llama componente ditar, para actualizar las tareas ....
  function handleTarName(id, nombre) {
    setVer(false)
    props.nameTarea(id, nombre) // es la función que le se pasa para registrar los cambios, en este caso el 'onchange' defaultChecked={false}
  }

  // ... botón EDIT PARA CAMBIAR EL NOMBRE DE LA TAREA.
  /*function hdEditTarea(id) {
    const iTar = `${props.tareaIndividual.id}keyk`; // donde se va a insertar 
    const el = React.createElement('input',{type:'text', value: props.tareaIndividual.name })
    const myTar = document.getElementById(iTar)

    ReactDOM.render(el,document.getElementById(iTar))

  }*/
  return (
    <>
    <div>
      <label>
        <input type="checkbox" id={props.tareaIndividual.id} checked={props.tareaIndividual.isCompleted}  onChange={handleTarea}/>
        {props.tareaIndividual.name}
        <button onClick={() => setVer(true)} disabled={ver}>Editar</button>
      </label>
      <span>{ver? <Edicion tarea={props.tareaIndividual} handleTarName={handleTarName} /> : '' }</span>
    </div>
   </>
  )  
}


// .... COMPONENTE TAREALIST
export default function Tarealist( {tareas, accionarTarea, nameTarea} ) {
  return (
    tareas.map( tareaIndividual => <Tarea key={tareaIndividual.id} accionarTarea={accionarTarea} nameTarea={nameTarea} tareaIndividual={tareaIndividual}/> )
  )
}
