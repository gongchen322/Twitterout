var express = require('express');
var server = express();
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

server.use(bodyParser.json());

server.use(favicon(path.join(__dirname, '/assets', 'favicon.ico')));
server.use('/', express.static(path.join(__dirname, '/build')));
server.use('/assets', express.static(path.join(__dirname, '/assets')));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.post('/export', function(req, res) {

	for (key in req.body){
		download(req.body[key].media[0].url, key+'.png', function(){
  			console.log('done');
		});
	}
	
})


var port = process.env.PORT || 4000;
server.listen(port, function () {
	console.log('listening on port', port);
});


module.exports = server;