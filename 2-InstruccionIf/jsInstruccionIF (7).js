function mostrar()
{
//tomo la edad  
    var edad;

    var estado;
    
    edad = parseInt(document.getElementById("edad").value);

    estado = document.getElementById("estadoCivil").value;
    
    // en el select tomo algo distinto con "soltero"

    if(edad < 18 && estado != "soltero" ){

        alert("es muy pequeño para no ser soltero");  
    }
    
	


}//FIN DE LA FUNCIÓN