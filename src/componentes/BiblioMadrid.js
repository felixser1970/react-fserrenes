import React from 'react'
import { Link } from "react-router-dom"
import '../scss/bibliomadrid.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BiblioMadrid = () => {
  const listaMadrid = [
    {nombre:  'Biblioteca Pública Municipal Aluche (Latina)', calle:'CALLE CAMARENA 10, 28047 MADRID', tel: '917198996',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Aluche-Latina-/?vgnextfmt=default&vgnextoid=7f0e3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Ana María Matute (Carabanchel) ', calle:'CALLE ISAAC ALBENIZ 1, 28019 MADRID ', tel: '915880830 ',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Ana-Maria-Matute-Carabanchel-/?vgnextfmt=default&vgnextoid=628e3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Benito Pérez Galdós (Centro) ', calle:'CALLE CONDE DUQUE 9, 28015 MADRID ', tel: '915885910',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Benito-Perez-Galdos-Centro-/?vgnextfmt=default&vgnextoid=13ec3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Canillejas (San Blas-Canillejas) ', calle:'CALLE BOLTAÑA 23, 28022 MADRID ', tel: '917411134',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Canillejas-San-Blas-Canillejas-/?vgnextfmt=default&vgnextoid=eb9e995a8bf5d010VgnVCM2000000c205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Ciudad Lineal (Ciudad Lineal) ', calle:'CALLE HERMANOS GARCIA NOBLEJAS 14, 28037 MADRID ', tel: '915887566',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Ciudad-Lineal-Ciudad-Lineal-/?vgnextfmt=default&vgnextoid=82ce995a8bf5d010VgnVCM2000000c205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal David Gistau (Salamanca)', calle:'AVENIDA TOREROS 5, 28028 MADRID ', tel: '917240804',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-David-Gistau-Salamanca-/?vgnextfmt=default&vgnextoid=c53e3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Dámaso Alonso (Chamartín) ', calle:'CALLE MANUEL FERRERO 1, 28036 MADRID', tel: '913503150',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Damaso-Alonso-Chamartin-/?vgnextfmt=default&vgnextoid=5870007f8441f010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Eugenio Trías. Casa de Fieras de El Retiro (Retiro) ', calle:'PASEO FERNÁN NÚÑEZ 24, 28009 MADRID ', tel: '913016466',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Francisco-Ayala-Vicalvaro-/?vgnextfmt=default&vgnextoid=f05279262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Francisco Ayala (Vicálvaro) ', calle:'BULEVAR INDALECIO PRIETO 21, 28032 MADRID ', tel: '917198996',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Aluche-Latina-/?vgnextfmt=default&vgnextoid=7f0e3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Francisco Ibáñez (Chamartín) ', calle:'CALLE MANTUANO 51, 28002 MADRID ', tel: '915103756',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Francisco-Ibanez-Chamartin-/?vgnextfmt=default&vgnextoid=0fce3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Gerardo Diego (Villa de Vallecas)', calle:'CALLE MONTE AYA 12, 28031 MADRID ', tel: '913806633',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Gerardo-Diego-Villa-de-Vallecas-/?vgnextfmt=default&vgnextoid=ca903d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Huerta de la Salud (Hortaleza) ', calle:'CALLE MAR DE LAS ANTILLAS 10, 28033 MADRID ', tel: '917645243',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Huerta-de-la-Salud-Hortaleza-/?vgnextfmt=default&vgnextoid=9c5879262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal José Hierro (San Blas-Canillejas) ', calle:'CALLE MARIA SEVILLA DIAGO 15, 28022 MADRID ', tel: '913135528',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Jose-Hierro-San-Blas-Canillejas-/?vgnextfmt=default&vgnextoid=338879262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Iván de Vargas (Centro) ', calle:'CALLE SAN JUSTO 5, 28005 MADRID  ', tel: '917586211',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Jose-Hierro-San-Blas-Canillejas-/?vgnextfmt=default&vgnextoid=338879262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},

    {nombre:  'Biblioteca Pública Municipal José Saramago (Fuencarral-El Pardo ', calle:' AVENIDA MONFORTE DE LEMOS 38, 28029 MADRID ', tel: '915886891',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Jose-Saramago-Fuencarral-El-Pardo-/?vgnextfmt=default&vgnextoid=70d879262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal La Chata (Carabanchel)  ', calle:'CALLE GENERAL RICARDOS 252, 28025 MADRID ', tel: '914220533',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-La-Chata-Carabanchel-/?vgnextfmt=default&vgnextoid=d9a879262ef5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Manuel Vázquez Montalbán (Tetuán) ', calle:'CALLE FRANCOS RODRIGUEZ 67, 28039 MADRID ', tel: '913980723',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Manuel-Vazquez-Montalban-Tetuan-/?vgnextfmt=default&vgnextoid=b5ca89e2c9e5d010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal María Zambrano (Tetuán)', calle:'PLAZA DONOSO 5, 28029 MADRID ', tel: '917339043',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Maria-Zambrano-Tetuan-/?vgnextfmt=default&vgnextoid=74703d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Miguel Delibes (Moratalaz) ', calle:'CALLE ARROYO BELINCOSO 11, 28030 MADRID ', tel: '913287300',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Miguel-Delibes-Moratalaz-/?vgnextfmt=default&vgnextoid=9e8f3d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Mario Vargas Llosa (Centro) ', calle:'CALLE BARCELO 4, 28004 MADRID ', tel: '914802433',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Mario-Vargas-Llosa-Centro-/?vgnextfmt=default&vgnextoid=6c4dbc2658739410VgnVCM2000000c205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Portazgo (Puente de Vallecas) ', calle:'CALLE CANTALAPIEDRA 11, 28038 MADRID ', tel: '917570323',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Portazgo-Puente-de-Vallecas-/?vgnextfmt=default&vgnextoid=89a40a47f441f010VgnVCM2000000c205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Pozo del Tío Raimundo (Puente de Vallecas) ', calle:'AVENIDA GLORIETAS 19, 28053 MADRID ', tel: '915070734',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Pozo-del-Tio-Raimundo-Puente-de-Vallecas-/?vgnextfmt=default&vgnextoid=d7203d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal San Blas (San Blas-Canillejas) ', calle:'CALLE SAN ROMAN DEL VALLE 8, 28037 MADRID ', tel: '913135297',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-San-Blas-San-Blas-Canillejas-/?vgnextfmt=default&vgnextoid=2e403d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Biblioteca Pública Municipal Vicálvaro ', calle:'CALLE VILLARDONDIEGO 36, 28032 MADRID ', tel: '917753143',url: 'https://www.madrid.es/portales/munimadrid/es/Biblioteca-Publica-Municipal-Vicalvaro/?vgnextfmt=default&vgnextoid=67e03d0b5e71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'},
    {nombre:  'Red de Bibliotecas Públicas Municipales. Servicios Centrales ', calle:'CALLE CONDE DUQUE 9, 28015 MADRID ', tel: '915885724 ',url: 'https://www.madrid.es/portales/munimadrid/es/Red-de-Bibliotecas-Publicas-Municipales-Servicios-Centrales/?vgnextfmt=default&vgnextoid=c1c0a89266ac5310VgnVCM2000000c205a0aRCRD&vgnextchannel=a68fed8a96b06010VgnVCM100000dc0ca8c0RCRD'}


  ]

  return (
   <section className="contenedor-madrid">
      <h1> LISTADO DE BIBLIOTECAS EN MADRID CAPITAL</h1>
    <div className='table-responsive'>
      <table className='table  table-hover'>
        <thead className='table-primary'>
            <tr>
              <td>#</td>
              <td>NOMBRE DE LA BIBLIOTECA</td>
              <td>DIRECCIÓN</td>
              <td>TELÉFONO</td>
            </tr>
        </thead>
        <tbody>
          {listaMadrid.map((e,idx) => <tr key={idx}><td>{idx}</td><td><a href={e.url}  rel = "noreferrer" target="_blank">{e.nombre}</a></td><td>{e.calle}</td><td>{e.tel}</td></tr>)}
        </tbody>
      </table>
    </div>


   </section>
  )
}

// {listaMadrid.map((e,idx) => <tr><td>{idx}</td><td><Link to={e.url}>{e.nombre}</Link></td><td>{e.calle}</td><td>{e.telefono}</td></tr>)}
