var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello Travis heheh!\n') // this will FAIL travis ci lint
  res.end('Hello Travis this should be okay!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
