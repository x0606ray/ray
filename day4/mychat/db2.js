'use strict'

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'plaid-tc.mysql.database.azure.com',
    user     : 'plaid@plaid-tc',
    password : 'pla!dp1aid',
    database : 'ray_db'
});

function dbinsert(msg){
  connection.connect();

  let sql = `insert into ray_db.comments (comment) values ('${msg}')`;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err; 
    console.log('users: ', rows);
  });
  
  connection.end();

}



module.exports = dbinsert;