import http from 'node:http';
import fetch from 'node-fetch'

var server = http.createServer(async function (req, rsp) {
  
  const grsp = await fetch('https://1admin.ischool.com.tw/dsa4/h.trialschool.tw')
  const data = await grsp.text();

  rsp.write(data);

  rsp.end();
});

server.listen(3000);
 console.log('1Campus App web server at port 3000 is running..')
