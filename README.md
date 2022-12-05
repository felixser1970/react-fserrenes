# Proyecto para crear una Web de Bibliotecas y consulta API

Este el el proyecto fin del curso de programación Web. Se basa en React y se ha requierido que nos conectemos a una API.

En mi caso se ha creado una API privada mediante el combinado node.js+espress que configura el servidor en *localhost:3002

Este servidor contiene un listado de las princiales bibliotecas del mundo que devuelve previa solicitud del cliente a la API privada. Conforma la página de *INICIO en la barra de menú.

Además se ha realizado una consulta a la API de google books desde el servidor, previa petición del cliente, que encapsula la key de la API privada y filtra los datos que devuelve al cliente.

`https://developers.google.com/books/docs/v1/reference/volumes/list`

## Scripts para el servidor

Correnponde al fichero `server.js` que se encuentra en la carpeta *servidor. Para lanzar el servidor, que debe ser el paso previo:

	`node server.js` 

Aparacerá un mensaje que esta listo y corriento en localhost puerto *3002

#### dependencias

Es necesario para que el servidor arranque correctamente instalar las dependencias

	npm i express
	npm i cookie-parser
	
## Script para React

Se usa enrutamiento, bootstrap y scroll infinito para mostras los resultados. Por tanto las dependencias a tener

#### dependencias
	
	npm i react-router-dom
	
	npm install react-bootstrap bootstrap
	import 'bootstrap/dist/css/bootstrap.min.css'
	
	npm install --save react-infinite-scroll-component
	

### `npm start`

Ejecuta el cliente React. Se debe arrancar antes el Servidor basado en nodejs.\
Con [http://localhost:3000](http://localhost:3000) saldrá la página de React en el navegador.



