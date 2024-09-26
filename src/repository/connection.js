import mysql from 'mysql2/promise';

let con = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === "1"; 
        }
        if (field.type.includes ('DECIMAL')) {
          return Number(field.string()); 
        }
        return next(); 
      }

})


console.log('--> Conexão com BD realizada');

export default con; 