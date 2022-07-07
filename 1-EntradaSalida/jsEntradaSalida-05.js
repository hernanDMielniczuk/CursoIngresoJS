/*
Hernán Darío Mielniczuk
DIV Y 
Ej5 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//definimos la variable del nombre
	let nombre;
	// le asignamos a la var nombre el dato que tomamo del ID
	nombre = document.getElementById("txtIdNombre").value;
	//repetimos lo mismo que la variable nombre
	let edad;
	edad = document.getElementById("txtIdEdad").value;


	alert("Su nombre es "+nombre+" y tiene "+edad+" años");
}
