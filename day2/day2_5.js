'use strict';

const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(bodyParser());
app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
    httpOnly: true,
    secure: false,
    maxage: 1000 * 60 * 30
    }
}));

const sessionCheck = function(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
};

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/golgo', sessionCheck, (req, res)  => res.sendFile(__dirname+'/logout.html'));
app.get('/ted',  (req, res)  => res.send('こんにちはTEDさん'));
app.get('/login',  (req, res)  => {
    if(req.session.user){
        res.redirect('/golgo');
    }else{
        res.sendFile(__dirname+'/public/login.html');
    }
});

app.get('/logout',  (req, res)  => {
    req.session.destroy();
    res.redirect('/login');
});

app.post('/so',  (req, res)  => {
    let mes = `${req.session.user}`;
    if(req.body.userid === req.body.password){
        mes = `ログイン成功<br>`;
        mes += `こんにちは${req.body.userid}さん`;
        req.session.user = req.body.userid;
        res.redirect('/golgo');
    }else{
        mes = `ログイン失敗`;
        res.send(mes);
    }

});

app.listen(PORT);

console.log(`listening on *: ${PORT}`);