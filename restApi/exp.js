var express = require('express');
var app = express();



app.get('/max/hello', (req, res) => {
	let name = req.query.name;
	res.send("hello " + name);
	res.writeHead(200);
});
app.listen(3002);
