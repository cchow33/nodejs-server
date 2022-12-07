// Create a server, start listening on localhost and connect

const http = require('http');
const hostname = 'localhost';
const port = 3000;

http
  .createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!');
  })
  .listen(port, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + port + '/');
  });