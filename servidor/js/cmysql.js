
var   mysql             = require('mysql2');

// ----- CLASES   --------------------
// Clase conexíon de la base de datos. Servira para distintas bases de datos.
class BDmysql
{
  constructor(host,user,pass,base)
  {
    
    this.host = host; this.user = user; this.pass = pass; this.base = base;
    this.error = ''; this.conn = null;
  }

  conectar() {
    this.error = 'fallo'; this.conn = null;
    this.conn = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.base
    });
    this.conn.connect((err) => {
      this.error  =  '';
      if(err) { this.error = err.sqlMessage; }
      //else console.log('Connected to MySQL Server!');
    });
    return(  this.conn || null  );
  }

  desconectar() {
    var rt = null;  this.error = 'fallo'
    if(this.conn);
      rt = this.conn.end((err) => {
        this.error  =  '';
        if(err) { this.error = err.sqlMessage; }
        //else console.log('Disonnected to MySQL Server!');
      }) || null;

    return rt;

  }
  
  // obtengo la lista de usuarios
  async listaUsuarios() {
    var cnx = this.conectar();
    var sql = "SELECT DISTINCT user, pass, nombre FROM usuarios";
      var queryPromise1 = () =>{
        return new Promise((resolve, reject)=>{
            cnx.query(sql,  (error, results)=>{
                cnx.end();this.conn = null;
                  if(error){ return reject(error); }
                return resolve(results);
            });
        });
     }
    var result1 = await queryPromise1();
    return (result1);
  }

  // obtengo la lista de bibliotecas
  async listaBibliotecas() {
    var cnx = this.conectar();
    var sql = "SELECT DISTINCT id, nombre, imagen, descripcion FROM bibliotop";
      var queryPromise1 = () =>{
        return new Promise((resolve, reject)=>{
            cnx.query(sql,  (error, results)=>{
                cnx.end();this.conn = null;
                  if(error){ return reject(error); }
                return resolve(results);
            });
        });
     }
    var result1 = await queryPromise1();
    return (result1);
  }

  async insertarUser(user1,pass1,nombre1) {
    var cnx = this.conectar();
    var sql = 'INSERT INTO usuarios SET ?';

      var queryPromise1 = () =>{
        return new Promise((resolve, reject)=>{
            cnx.query(sql,{user: user1, pass: pass1, activo: 1, permisos: '', nombre: nombre1 }, (error, results)=>{
              cnx.end();this.conn = null;
              return (error)? reject(error) : resolve(results);  
            });
        });
     }
     
    var result1 = await queryPromise1();
    return (result1);
  }

  
  

}           


module.exports = { BDmysql };

/*
async insertarUser(id1,user1,pass1,nombre1) {
    var cnx = this.conectar();
    var sql = 'INSERT INTO usuarios SET ?';
      var queryPromise2 = () => new Promise((resolve, reject)=>{
            cnx.query(sql,{id: id1, user: user1, pass: pass1, on: 1, permisos: '', nombre: nombre1 } ,  error =>{
                cnx.end(); this.conn = null;
                return (error)? reject(error) : resolve('');
            });
        });
    
     var rst = await queryPromise2();
     return (rst);
  }


*/