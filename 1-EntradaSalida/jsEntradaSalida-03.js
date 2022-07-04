/*
Hernán Darío Mielniczuk
DIV Y 
Ej3 E/S

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;

	//El ID se encuentra Inspeccionando la página (f12), document.getElementById("NOMBRE DEL ID en el f12")

	//nombreIngresado=txtIdNombre.value;

	nombreIngresado = document.getElementById("txtIdNombre").value;


	alert(nombreIngresado);

}


