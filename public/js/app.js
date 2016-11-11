var socket = io();

var cargarPagina = function () {
	var boton = document.getElementById("prueba");
	boton.addEventListener("click", enviarMensaje);
};

var enviarMensaje = function () {
	var mensaje = "Hola, ayer ganó Perú! -.-";
	socket.emit("saludo", mensaje);
};

socket.on("respuesta", function (respuesta) {
	alert(respuesta);
});

socket.on("respuesta general", function(mensaje) {
	console.log(mensaje);
});

window.addEventListener("load", cargarPagina);