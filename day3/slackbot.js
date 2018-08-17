'use strcit';

const axios = require('axios');
const BASE_URL = `https://hooks.slack.com/services/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`; // トークンURL

const main = async (message) =>{
  let options = {
    method: 'post',
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    data: `payload={
        "channel": "#general",
        "username": "天気がわかるよつば",
        "text": "${message}",
        "icon_emoji":":yotsuba:"
    }`
   };

    try {
        const res = await axios.request(options);
        console.log(res.data);
    } catch (error) {
       console.log(error);
    }
}
module.exports = main;