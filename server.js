var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on("connection", function(client) {
	client.on("saludo", function(data) {
		console.log(data);
		var mensaje = "Ahora toca Brasil! :D";
		client.emit("respuesta", mensaje);
	});

	client.broadcast.emit("respuesta general", "Hola");
});

server.listen(3000, function() {
	console.log("El servidor ha iniciado en el puerto 3000");
});