/*
Hernán Darío Mielniczuk
DIV Y 
Ej10 E/S

ENTREGADO

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	enteroImporte = parseInt(importe);
	descuento = enteroImporte *25 /100;

	resultado = enteroImporte - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
*/


/******************************************************************************
10bis E/S
Hernán Darío Mielniczuk
DIV Y 
Ej10BIS E/S

ENTREGADO

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento (el usuario ingresa el porcentaje del descuento)
en el cuadro de texto "RESULTADO" y por alert el valor del descuento

*******************************************************************************/



function mostrarAumento()
{

	//Declaramos variables
	let importe;
	let descuento;
	let importeDescontado;
	let resultado;

	// Solicitamos los datos al usuario.
	importe = document.getElementById("txtIdImporte").value;
	descuento = prompt("Ingrese el descuento");

	// Pasamos los datos de cadenaDeCaracteres a numeros.
	importe = parseInt(importe);
	descuento = parseInt(descuento);

	// resolvemos los descuentos
	importeDescontado = (importe * descuento) / 100;
	resultado = importe - importeDescontado;

	// mostramos al usuario
	document.getElementById("txtIdResultado").value = resultado;
	alert (importeDescontado);


}