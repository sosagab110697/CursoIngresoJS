function mostrar()
{
//tomo la edad  

    var edad;

    edad = parseInt(document.getElementById("edad").value);

    //edad >= 13 && edad <=17  o   !(edad >= 13 && edad <=17) cualquiera de las 2 formas funciona

    if( edad < 13 || edad > 17){

        alert("no es adolescente");
    }

}//FIN DE LA FUNCIÓN