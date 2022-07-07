/*
Hernán Darío Mielniczuk
DIV Y 
TP2 E/S

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let radioTerreno;
    let largoTotal;
    let anchoTotal;
    let resultado;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    radioTerreno = document.getElementById("txtIdRadio").value;

    largoTerreno = parseInt (largoTerreno);
    anchoTerreno = parseInt (anchoTerreno);

    largoTotal = (largoTerreno * 2);
    anchoTotal = (anchoTerreno * 2);

    resultado = (largoTotal * 3) + (anchoTotal * 3);

    alert(resultado);


}
function Circulo () 
{
    let radioTerreno;
    let diametro;
    let perimetro;
    let largoTotal;
    let anchoTotal;
    let resultado;


    radioTerreno = document.getElementById("txtIdRadio").value;

    radioTerreno = parseInt (radioTerreno);

    diametro = radioTerreno *2;
    perimetro = diametro * 3.14;

    resultado = perimetro * 3;

    alert(resultado);


}


function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let radioTerreno;
    let area;
    let materialCemento;
    let materialCal;
    let largoTotal;
    let anchoTotal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt (largoTerreno);
    anchoTerreno = parseInt (anchoTerreno);

    area = (largoTerreno * anchoTerreno);

    materialCemento = (area *2);
    materialCal = (area *3);

    alert("Vas a necesitar "+ materialCemento +" bolsas de cemento y " + materialCal + " bolsas de cal");


}