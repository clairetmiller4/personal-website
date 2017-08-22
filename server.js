var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(5000, function() {
	console.log('Server listening on port 5000');
});