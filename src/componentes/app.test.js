import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import {render,screen} from '@testing-library/react'
import { Pie } from './Pie.js'
import { Encabezado, Usuario} from './encabezado.js'
import { Menus} from './Menus.js'
import { ListaBiblio, Biblio } from './ListaBiblio.js';
import { BiblioMadrid } from './BiblioMadrid';
import { Uprov } from '../context/context';


describe("Texto Pie",()=> {
  test("Ver titulo", () => {
      render(<Pie >Hola</Pie>);
      expect(screen.getByText(/Hola/i)).toBeInTheDocument()

  })
})

describe("prueba del Banner",()=> {
 
  test("Ver Pantalla", () => {
      render(<Encabezado comentario='comentario banner'>biblioteca</Encabezado>);
      expect(screen.getByText(/comentario banner/i)).toBeInTheDocument()
      expect(screen.getByText(/biblioteca/i)).toBeInTheDocument()

  })
})

describe("Prueba de menús",()=> {
 
  test("Mostrar menus", () => {
      render(
      <>
       <Uprov> 
          <Menus lista={[]} />
       </Uprov>
      </>
      
    );
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument()

  })
})

describe("Prueba del Usuario",()=> {
 
  test("Nombre de usuario", () => {
      render(
        <>
        <Uprov> 
          <Usuario>Miusuario</Usuario>
        </Uprov> 
        </>
      );
      expect(screen.getByText(/Miusuario/i)).toBeInTheDocument();

  })
})

describe("Listado de Bibliotecas en Madrid",()=> {
 
  test("Biblioteca de  Madrid", () => {
      render(
        <>
          <BiblioMadrid />
        </>
      );
      expect(screen.getByText(/91 588 57 24/i)).toBeInTheDocument();

  })
})




