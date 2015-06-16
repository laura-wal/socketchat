
// Setup Express App
var express = require('express');
var app = express();

// Create HTTP server for...
var http = require('http');
var server = http.createServer(app);

// link files
app.use(express.static(__dirname + '/public'));

// Use views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
 res.render('index')
});

server.listen(3000)

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.emit('connected');
  socket.on('chat', function(data) {
    writeLine(data.name, data.line);
      socket.on('chat', function(data) {
        socket.broadcast.emit('chat', data);
        socket.on('action', function(data) {
          socket.broadcast.emit('action', data);
      });
    });
  });
});
