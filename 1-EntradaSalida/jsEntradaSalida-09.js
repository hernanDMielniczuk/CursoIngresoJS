/*
Hernán Darío Mielniczuk
DIV Y 
Ej9 E/S

ENTREGADO

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let enteroSueldo;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;

	enteroSueldo = parseInt(sueldo);
	aumento = enteroSueldo *10 /100;

	resultado = enteroSueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;

	
}
