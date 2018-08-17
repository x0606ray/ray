'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 4000;
const dbinsert = require('./db2.js');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        // io.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);

     dbinsert(msg);
    
 

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
