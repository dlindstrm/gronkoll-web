var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
module.exports = app;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components/angular')));
app.use(express.static(path.join(__dirname, 'bower_components/normalize.css')));

/**
 * Routes
 */
app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, "public/templates/index.html"));
});

app.set('port', 1234);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});