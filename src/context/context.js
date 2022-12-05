import React, { useContext, useState,useEffect} from "react"


const uContext = React.createContext();
const  LOCAL_STORAGE_KEY = 'web.biblioteca'

export const  Uprov = (props)  => {

  let  [estadoWeb, setUsuario] = useState({usuario:'',pagina:0});
  const  [menu, setMenu] = useState( [{titulo: 'Inicio', enlace: '#', private : false},
                                      {titulo: 'Bibliotecas Madrid Capital', enlace: '#', private: false},
                                      {titulo: 'Consultas de Libros con Paginación', enlace: '#', private : true},
                                      {titulo: 'Consulta de Libros con Scroll', enlace: '#', private : true},
                                    ]);

  // .... recupera el usuario con el que se ha logeado el usuario con el que se ha lo
  useEffect(()=> {
    const el = JSON.parse(sessionStorage.getItem( LOCAL_STORAGE_KEY) )
    if(el) setUsuario(el)
  },[])

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(estadoWeb))
  },[estadoWeb])

 /* // ... MUY IMPORTANTE, cuando se cierra el navegador, borro el localstoraga.
  useEffect(() => {
    window.addEventListener('beforeunload', ()=> sessionStorage.clear())
    return () => {
        window.removeEventListener('unload',() => alert('saliendo del navegador'))
    }
})*/


  function login(e, userp,passp) {

    let  cookie = ''
    const par = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ user: userp, pass: passp  }),
      credentials : 'include'
    }

    e.preventDefault();
    if(userp.length && passp.length){
      fetch("http://localhost:3002/login",par)
      .then(res    =>  {
        cookie = res.headers.get('Set-Cookie');
        console.log(res.headers);
        console.log(`MI COOKIE = ${cookie}`)
        return res.json()
      })
      .then(data   =>  setUsuario({usuario:data.st, pagina:estadoWeb.pagina }))
      .catch(error =>  console.error(error))
    }
    console.log(estadoWeb)

  }
  

  function logout(e) {

    e.preventDefault()
    sessionStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify({usuario:'',pagina:0}))
    fetch("http://localhost:3002/logout", { credentials : 'include' })
    .then(res    =>  res.json())
    .then(data   =>  document.location.href = 'http://localhost:3000/bibliotecas' ) 
    .catch(error =>  console.error(error))
   
  }

  return <uContext.Provider value={{
    estadoWeb,
    setUsuario,
    login,
    logout,
    menu,
    setMenu
  }} {...props} /> 

}

export function useUsuario() {
  const context = useContext(uContext)
  if(!context) {
    throw  new Error('Fallo del contexto')
  }

  return context
}
