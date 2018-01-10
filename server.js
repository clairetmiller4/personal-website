var express = require('express');
var app = express();
const path = require('path');
var port = process.env.PORT || 8080;

const publicPath = path.join(__dirname, 'public');
const indexPath = path.join(publicPath, 'index.html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
