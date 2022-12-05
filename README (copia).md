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
	npm i cookie-parse
	
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


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
