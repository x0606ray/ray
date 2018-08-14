'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser()); //宣言
app.use(express.static('public')); //宣言

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/kuku',  (req, res)  => {
    let mes = '';
    for (let i =1; i< 10; i++){
        for(let j =1; j< 10; j++){
            mes = mes + ' ' + i*j;
        }
    mes = mes + '<br>';
    }
    res.send(mes);
})

app.listen(PORT);
console.log(`listening on *: ${PORT}`);