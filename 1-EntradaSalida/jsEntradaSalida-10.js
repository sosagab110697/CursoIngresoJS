/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var num1;
    
    var descuento;

    var resultado;

    //al ser un sueldo usamos parseFloat 

    num1 = parseFloat(document.getElementById("importe").value);

    descuento = (25*num1)/100;

    resultado = num1 - descuento;

    document.getElementById("resultado").value = resultado;

    alert( "aumento " + resultado );
}
