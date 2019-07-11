function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	// obtengo un numero aletorio a traves de las siguientes formulas matematicas..

	nota = Math.floor( Math.random() * 10 + 1);

	//repasar lo del if(concepto)


	if( nota >= 9){

		alert("Nota: " + nota + " excelente");
	}
	else{
		if(nota >= 4){

			alert("Nota: " + nota + " aprobo")


		}
		else{
			alert("Nota: " + nota + " Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN