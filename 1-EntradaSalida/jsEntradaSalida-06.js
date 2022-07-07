/*
Hernán Darío Mielniczuk
DIV Y 
Ej6 E/S

ENTREGADO


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// Declaro variables
	let numeroUno;
	let numeroDos;
	let resultado;

	// Consigo los números a sumar
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	// Pasarlos a numero 
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	//Sumar los numeros
	resultado = numeroUno + numeroDos;

	// Mostrar el resultado
	alert(resultado);
}