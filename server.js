const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.write(`<html>
  <head>
    <title>My first response</title>
  </head>
  <h1>Hello friend!</h1>
  <p>How are you?</p>
</html>
`);
	res.end();
});

server.listen(3000);
