'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser()); //宣言
app.use(express.static('public')); //宣言

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/golgo',  (req, res)  => res.send('ごるごさんやっほー'));
app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/hoge.html'));
app.post('/so',  (req, res)  => {
    console.log(req.body);
    res.send(`こんにちは${req.body.userid}さん`);
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);