var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes/index');

var app = express();
module.exports = app;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components/angular')));
app.use(express.static(path.join(__dirname, 'bower_components/normalize.css')));

/**
 * Routes
 */
app.use('/', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
  res.status(err.status || 500).redirect('/');
});

app.set('port', 3002);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});