// Create a server, tell it to start listening on localhost and connect

// 1. create a variable to require the 'http' library in nodejs
const http = require('http')

// 2. create a variable that specifies port we'll be listening to
const port = 3000;

// 6: Import fs library to read index.html file
const fs = require('fs');

// 3. create a server variable and use the http function created in step 2 to call the createServer function  which takes two functions - req and res
const server = http.createServer(function (req, res) {

  // 5. Return response to user with response object that was passed into the function in step 3. To tell it to write html, use 'writeHead(status, { header: value })'. This tells browser the information sent to it will be HTML so parse it as HTML
  res.writeHead(200, { 'Content-Type': 'text/html'})

  // 7. Call the fs function
  fs.readFile('index.html', function(error, data){
    // If error, tell browser we can't find what we're looking for
    if(error){
      res.writeHead(404)
      res.write('Error: File not found')
    } else {
      res.write(data) //all our data inside index.html
    }
    res.end()
  })
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




