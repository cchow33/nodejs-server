// Create a server, tell it to start listening on localhost and connect

// 1. create a variable to require the 'http' library in nodejs
const http = require('http')
// 2. create a variable that specifies port we'll be listening to
const port = 3000;

// 3. create a server variable and use the http function created in step 2 to call the createServer function  which takes two functions - req and res
const server = http.createServer(function (req, res) {

})

// 4. Set up server to listen to port, this takes a single function which gets called as soon as server starts listening
server.listen(port, function(error){
  if(error){
  // Print a message and pass error along so we can see what happened
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
})

// 5. In terminal 'node + file name' to run server







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
