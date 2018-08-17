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
app.post('/rei',  (req, res)  => {
    console.log(req.body);
    //res.send(`こんにちは${req.body.userid}さん`);
    if(req.body.userid ==='rei' && req.body.password ==='01'){
        let mes = `こんにちは${req.body.userid}さん`;
        mes = mes + '<br>ログイン成功';
        res.send(mes);
    }else{
        res.send('ログイン失敗');
    }
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);