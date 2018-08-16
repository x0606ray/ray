'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        // io.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);

        const mysql      = require('mysql');
        const connection = mysql.createConnection({
            host     : 'plaid-tc.mysql.database.azure.com',
            user     : 'plaid@plaid-tc',
            password : 'pla!dp1aid',
            database : 'ray_db'
        });
        
        
        connection.connect();
        
        let sql = `insert into ray_db.comments (comment) values ('${msg}')`;
        connection.query(sql, (err, rows, fields) => {
          if (err) throw err; 
          console.log('users: ', rows);
        });
        
        connection.end();


        console.log(`message: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
