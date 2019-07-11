function mostrar()
{
//tomo la edad  

    var edad;
    var estado;

    edad = parseInt(document.getElementById("edad").value);
    
    estado = document.getElementById("estadoCivil").value;

    //la variable estado tiene 3 tipos de select y tengo q elegir "soltero"
    
    if( edad > 18 && estado == "Soltero"){

        alert("es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN