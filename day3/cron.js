const {CronJob} = require('cron');
const slack = require('./slackbot.js'); //各自のslackpost.jsなどの場所

new CronJob('*/1 * * * * *', () => {
    const main = async (message) =>{
        let options = {
          method: 'post',
          baseURL: BASE_URL,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          data: `payload={
              "channel": "#weather",
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
}, null, true);