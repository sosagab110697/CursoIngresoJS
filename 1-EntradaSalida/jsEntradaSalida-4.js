/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("ingrese un nombre");

	//se tomo el dato por prompt y se dio vuelta la caja de texto por la variable

	document.getElementById("elNombre").value = nombre; 

}

