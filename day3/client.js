'use strict';
const axios = require('axios');

const url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010';

axios.get(url)
　 .then(function(response){

    // console.log(response.data.forecasts[0].date);
    // console.log(response.data.location.city);
    // console.log(response.data.forecasts[0].telop);
    // console.log(response.data.forecasts[0].temperature.max.celsius);
    // console.log(response.data.forecasts[0].telop);
 let mes=''
    mes = `${response.data.forecasts[0].date}${response.data.location.city}の天気は${response.data.forecasts[0].telop}、最高気温は${response.data.forecasts[0].temperature.max.celsius}だよ〜？夏だな？`
    console.log(mes)

});
