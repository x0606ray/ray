'use strict'

const mysql      = require('mysql');
const connection = mysql.createConnection(require('./config.js'));

//ここからMySQLアクセス
connection.connect();

let sql = `delete from ray_db.users where id = 7`;
connection.query(sql, (err, rows, fields) => {
  if (err) throw err; 
  console.log('users: ', rows);
});

connection.end();