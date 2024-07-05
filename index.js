const http = require('http');
http.createServer((req,resp)=>{
  resp.write("Hello everyone! this end KC");
  resp.end();
}).listen(4500);