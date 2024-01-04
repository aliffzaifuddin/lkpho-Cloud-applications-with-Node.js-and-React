const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);

  // greet the user depending on the time of the day.
  let dateVal = today.getDate();
  let greeting = "It is still not morning"

  if (dateVal.getHours() > 6 && dateVal.getHours() < 12 ) {
    greeting = "Good Morning!"
  } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18 ) {
    greeting = "Good afternoon!"
  } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21 ) {
    greeting = "Good evening!"
  } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24 ) {
    greeting = "Good night!"
  }
  res.end(`Hello, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);