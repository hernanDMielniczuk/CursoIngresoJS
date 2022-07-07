/*
Hernán Darío Mielniczuk
DIV Y 
TP3 E/S

ENTREGADO

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let temperaturaEntero;
    let farenACels;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperaturaEntero = parseInt(temperatura);

    farenACels = (temperaturaEntero - 32) *0.5556;

    alert (temperaturaEntero+" Fahrenheit son "+farenACels+" centigrados");

}

function CentigradosFahrenheit () 
{
	let temperatura;
    let temperaturaEntero;
    let celsAFarh;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperaturaEntero = parseInt(temperatura);

    celsAFarh = (temperaturaEntero *1.8) + 32;

    alert (temperaturaEntero+" Celsius son "+celsAFarh+" Farhrenheit");

	
}
