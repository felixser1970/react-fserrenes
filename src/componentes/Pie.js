import React from 'react'


const mi_fecha = new Date();

export const Pie = ({children}) => {
  return (
    <>
      <p></p>
      <footer className="footer">
          <div className='marca'>Biblioteca Atenea</div>
          <p>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              <img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
            </a>
          </p>
          <div>
            Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">licencia de Creative Commons Reconocimiento 4.0 Internacional</a>
          </div>
         
          
          <div className="copy">&copy;<span id="year">{mi_fecha.getFullYear()}</span>&nbsp;{children}</div>
      </footer>
    </>
  )
}
