function mostrar()
{
//tomo la edad  

    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad > 18){

        alert("es adulto");
    }
    
    else
    
    if(edad >= 13 && <= 17){
        
        alert("es adolescente");
    }
    else{
        alert("es niño");
    
    }


}//FIN DE LA FUNCIÓN