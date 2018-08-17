
'use strict'

const http = require('http');
const PORT = 4000;

http.createServer((req, res) => {
    // console.log(req.==='/golgo');
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  if(req.url ==='/golgo'){
      res.end('golgoさんおはよ！');
  }else　if(req.url ==='/ted'){
      res.end('ドラッグはだめだよ〜(´・ω・｀)');
  }else if(req.url ==='/hilary'){
      res.end('かわいい')
  }else if(req.url ==='/rei'){
        res.end('お腹へった')
  }else{
     res.end('ハワイに行きたい\n');
  }
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
