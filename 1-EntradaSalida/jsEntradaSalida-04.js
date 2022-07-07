/* 
Hernán Darío Mielniczuk
DIV Y 
Ej4 E/S

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Definimos nombre
	let nombre;
	//PEdimos datos via prompt
	nombre = prompt("ingresa nombre");
	//Definimos el ID y mostramos el nombre previamente definido
	document.getElementById("txtIdNombre").value = nombre;
	

}

