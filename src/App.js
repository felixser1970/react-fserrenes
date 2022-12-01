import { Route, Routes } from "react-router-dom"
import DetalleLibro from "./componentes/DetalleLibro";
import Web from './componentes/Web'
import { Error } from  './paginas/Error';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/bibliotecas" element={<Web />} />
        <Route path="/libro/:id" element={<DetalleLibro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );

}

export default App;

