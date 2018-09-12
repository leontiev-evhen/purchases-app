var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./db');
var config = require('./config');
var port = process.env.PORT || 3000;

// CORS
app.use(cors({
    origin: config.CORS_ORIGIN,
    credentials : true
}));

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Socket IO
var io = require('socket.io')(server);

var clients = [];
io.sockets.on('connection', function(socket) {
  clients.push(socket);
  socket.on('disconnect', function() {
     var i = clients.indexOf(socket);
     clients.splice(i, 1);
  });
});

// Setup custom app middleware
app.use(function(req, res, next) {
  req.io = io;
  next();
});

var PurchaseController = require('./purchase/PurchaseController');
app.use('/purchases', PurchaseController);
