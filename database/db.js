const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expre',
    port: 3307
})

conexion.connect((error)=>{
    if(error){
        console.error('error de conexion es: '+error)
        return
    }
    console.log('Conectado a MySql');
})

module.exports = conexion;