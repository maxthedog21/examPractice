var http = require('http');


var server = http.createServer((req, res) =>{
				console.log('this will print in the  server console');
				console.log(req.url);
				res.end('this will print on the webpage localhost:3002');
});
server.listen(3002);

