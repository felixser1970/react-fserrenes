const express = require('express')
const session = require('express-session')
var cookieParser = require('cookie-parser');
var bp = require('body-parser');      //función para convertircaracteres especiales de HTML
const app = express()
const port = 3002
const bibliotecas = require('./datos.js').bibiotecas;   // LISTA DE BIBLIOTECAS ...
var usuarios = require('./datos.js').usuarios;    // LISTA DE BIBLIOTECAS ...




app.use(bp.json()); // IMPORTANTE PARA POST AYAX. convierte el body en un objeto JSON

app.set('x-powered-by', false);   // elimina mensaje que indica que el sitio se ha creado con express.
app.use(cookieParser('12345'));
app.use(bp.urlencoded({ extended: false }));
app.use(session({
  secret: '12345', resave: false, saveUninitialized: false,
  cookie: { expires: new Date().toGMTString(), maxAge: 60 * 1000 * 60, SameSite: 'Lax', rolling: true, httpOnly: true }
}));


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');    // AUROTIZACIONES PERMITIDAS ....
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');                                             // permite localhost    
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');                                  // MÉTODOS PERMIDOS

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) { res.status(200).end(); }
  else next();
});


// ----> página inicial con las fotos de las bibliotecas...
app.get(['/bibliotecas', '/'], (req, res) => {
  console.log(`U:${req.session.user}- T:${req.session.cookie.maxAge}`)
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.status(200).end(JSON.stringify({ b: bibliotecas, u: (req.session.user || null) })); // debo de retornar si hay login. En caso contrario devuelvo NULL
})

app.listen(port, () => {
  const fecha = new Date(Date.now() + 0)
  console.log(`${fecha} - Servidor Listo LOCALHOST: ${port} `)
})


app.post('/login', (req, res) => {
  let vst = ''

  if ((req.body || null) && (req.body.user || null) && (req.body.pass || null) && req.accepts('json')) // ALTA SESSION (P0ST)
  {
    if (usuarios.filter(e => e.user === req.body.user && e.pass === req.body.pass).length) {
      req.session.user = req.body.user
      req.session.save((function (err) { }));
      vst = req.session.user   // login correcto.
    }
  }
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.status(200).end(JSON.stringify({ st: vst }));
})

app.post('/check', (req, res) => {
  let vst = "";
  //if ( (req.session || null)) req.session.destroy();
  if ((req.body || null) && (req.body.user || null) && req.accepts('json') && (!(usuarios.filter(e => e.user === req.body.user)).length)) {// ALTA SESSION (P0ST)
    vst = 'ok'
  }
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.status(200).end(JSON.stringify({ st: vst }));
})

app.post('/registro', (req, res) => {
  let vst = "";
  //if ( (req.session || null)) req.session.destroy();
  if ((req.body || null) && (req.body.user || null) && (req.body.pass || null) && (req.body.nombre || null) && req.accepts('json') && (!(usuarios.filter(e => e.user === req.body.user)).length)) {// ALTA SESSION (P0ST)
    vst = 'ok'
    //usuarios.push({ user: req.body.user, pass: req.body.pass, nombre: req.body.nombre})
    usuarios = [...usuarios, { user: req.body.user, pass: req.body.pass, nombre: req.body.nombre }]
  }
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.status(200).end(JSON.stringify({ st: vst }));
})


app.get('/logout', (req, res) => {
  //console.log(`U:${req.session.user}- T:${req.session.cookie.maxAge}`)

  if ((req.session || null) && (req.session.user || null)) {
    req.session.user = '';
    req.session.save((function (err) { }));
  }
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.status(200).end(JSON.stringify({ st: 'ok' }));

});


app.get('/consulta', (req, res) => {
  let rt = { resp: [], total: 0 }
  const extraer = (e) => {
    return ({
      titulo: e.volumeInfo.title,
      paginas: (e.volumeInfo.pageCount || -1),
      descripcion: (e.volumeInfo.description || ''),
      autores: (e.volumeInfo.authors || []),
      imagen: (e.volumeInfo.imageLinks || ''),
      fecha: (e.volumeInfo.publishedDate || ''),
      id: e.id
    })
  }

  if ((req.query || null) && (req.query.user || null) && (req.session.user || null) && (req.session.user === req.query.user)
    && (req.query.q || null) && (req.query.max || null) && (req.query.istart || null)) {
    const url = `https://www.googleapis.com/books/v1/volumes/?printType=books&startIndex=${req.query.istart}&maxResults=${req.query.max}&q=${encodeURI(req.query.q)}&key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc`
    //let url2 = "https://www.googleapis.com/books/v1/volumes/?&maxResults=40&q=harry&key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc"
    fetch(url)
      .then((res) => res.json())
      .then((lbr) => {
        if (typeof lbr !== 'undefined' && (lbr.items || null)) {
          rt.total = lbr.totalItems;
          rt.resp = lbr.items.map(e => extraer(e,))
            .filter(e => e.titulo.length && typeof e.imagen === "object" && e.autores.length) // elimina registros vacios e incorrectos.
        }
      }).catch((error) => rt.total = -1)
      .finally(() => {
        console.log(rt)
        res.setHeader('Content-Type', 'text/json; charset=utf-8');
        res.status(200).end(JSON.stringify(rt));
      });
  }
  else {
    //res.redirect('/bibliotecas'); //  SI LA SESSIÓN HA TERMINADO, VUELVO A LA PÁGINA DE HOME./?key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc
    res.setHeader('Content-Type', 'text/json; charset=utf-8');
    rt.total = -1; // retorno  un valor negativo cuando el no hay usuario logeado.
    res.status(200).end(JSON.stringify(rt));
  }
})



app.get('/libro/:id', (req, res) => {
  let rt = { resp: {}, total: 0 }
  if ((req.params || null) && (req.params.id || null)) {
    const url = `https://www.googleapis.com/books/v1/volumes/${req.params.id}?key=AIzaSyBCO9tGIjz2Vtm4pZwAVDj8rpi9svZ6vQc`
   
    fetch(url)
      .then((res) => res.json())
      .then((lbr) => {
        if (typeof lbr !== 'undefined' && (lbr.volumeInfo || null) && (lbr.id === req.params.id)) {
          rt.total = 1;
          rt.resp = {
            titulo: lbr.volumeInfo.title,
            paginas: (lbr.volumeInfo.pageCount || -1),
            descripcion: (lbr.volumeInfo.description || ''),
            autores: (lbr.volumeInfo.authors || []),
            imagen: (lbr.volumeInfo.imageLinks || ''),
            fecha: (lbr.volumeInfo.publishedDate || ''),
            categoria: (lbr.volumeInfo.categories || []),
            isbn: (lbr.volumeInfo.industryIdentifiers || []),
            editorial: (lbr.volumeInfo.publisher || ''),
            pais: (lbr.saleInfo.country || '')

          }

        }
      }).catch((error) => rt.total = 0)
      .finally(() => {
        console.log(rt)
        res.setHeader('Content-Type', 'text/json; charset=utf-8');
        res.status(200).end(JSON.stringify(rt));
      });
  }
  else {
    res.setHeader('Content-Type', 'text/json; charset=utf-8');
    res.status(200).end(JSON.stringify(rt));
  }
})
