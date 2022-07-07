/*
Hernán Darío Mielniczuk
DIV Y 
TP1 E/S

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let resultadoSuma;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value; 
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    resultadoSuma = productoUno + productoDos + productoTres;

    alert("La suma de los resultados es " + resultadoSuma);

}
function Promedio () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let resultadoPromedio;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value; 
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    resultadoPromedio = (productoUno + productoDos + productoTres)/3;

    alert("El promedio de los productos es "+ resultadoPromedio);

}
function PrecioFinal () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let resultadoSuma;
    let precioIva;
    let iva;
    let resultadoTotal;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value; 
    productoTres = document.getElementById("txtIdPrecioTres").value;
    iva = 21;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    resultadoSuma = productoUno + productoDos + productoTres;
    precioIva = (resultadoSuma * iva)/100;

    resultadoTotal = resultadoSuma + precioIva;

    alert("La suma de los productos mas IVA " + resultadoTotal);
}