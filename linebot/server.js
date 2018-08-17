'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const axios = require('axios');
const PORT = process.env.PORT || 4000;

const config = {
    channelSecret: '0b5a7b73400ef35d1a6b9b99e3617795',
    channelAccessToken: 'uTURu2EKCJEHcvNUpTYKfKE5LMoXOJL9Cq4Nlh2gqn3C+r9AmLdCbLeS6sxDM7L26rO9gn/QvSu3AxwdGasShAgmJbtdMEax5LqlzoeXd+vNaIuE//geHzwbv+9FrZy9/f+R/lHzZ+cH0/i5vL+ldAdB04t89/1O/w1cDnyilFU='
};

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  let mes = ''
  if(event.message.text === '天気教えて！'){
    mes = 'ちょっとまってね'; //待ってねってメッセージだけ先に処理
    getNodeVer(event.source.userId); //スクレイピング処理が終わったらプッシュメッセージ
  }else{
    mes = event.message.text;
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: mes //実際に返信の言葉を入れる箇所
  });
}

const getNodeVer = async (userId) => {
    const res = await axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010');
    const item = res.data;

    await client.pushMessage(userId, {
        type: 'text',
        text:date.forecasts[0].date + "の" + date.location.city + "は" + date.forecasts[0].telop + "だなー。最高気温は" + date.forecasts[0].temperature.max.celsius + "だな？" 
    });
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);