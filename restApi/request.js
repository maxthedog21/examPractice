var request = require('request');

var jsonUrl = 'https://jsonplaceholder.typicode.com/posts/?';

var parameters = {
		method: 'GET',
		url: jsonUrl + 'userId=1'
}

request(parameters, (err, response, body) =>{
	console.log(body);
})
