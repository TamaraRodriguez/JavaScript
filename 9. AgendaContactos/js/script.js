var arrayContactos= new Array();
var i = 0;
escribir=false;
function menuAgenda(){
	do{
		var opcion= prompt("Marque la opción que desea realizar: ");
		switch(opcion){
			case '1':
				anadirContacto();
				break;
			case '2':
				eliminarContacto();
				break;				
			case '3':
				mostrarContacto();
				break;
			case '4':
				buscarContacto();
				break;
			case 's':
				salirAgenda();
				break;
			default:
				alert("¡¡Error, no has introducido una opción válida!!");
		}
	}while(opcion!='s');
}//cierre de función menu agenda.

function anadirContacto(){
	if (i<=3) {
		arrayContactos[i]=prompt("Introduzca nombre:");
		i++;
		// alert(); hay que marcar en la posición que has añadido el contacto y las posiciones que quedan por ocupar!!
	}
	else{
		alert("¡¡La agenda ya esta completa de contactos, borre algún contacto con la opción 2!!");
	}
}//cierre de función añadir contactos.

function eliminarContacto(){
	mostrarContacto();
	var posicion= prompt("Introduzca la posición del contacto a borrar: ");
	var posReal = posicion - 1;

	if((arrayContactos==null)||(arrayContactos==undefined)||(arrayContactos=="")){
		alert("La agenda está vacía.");
	} 
	else if ((posReal < 0)||(posReal>arrayContactos.length)){
			alert("¡¡La posición que has introducido está fuera de rango!!");
	}
	else{
		arrayContactos.splice(posReal,1); //Nombre del array. splice(posición comienzo,número del elemento que quieres borrar) para borrar los elementos que yo quiera desde una posición determinada. Un array que contiene los elementos eleminados. Si sólo se ha eliminado un elemento, devuleve un array con un sólo elento. Si no se ha eliminado ningún elemento, devuelve un array vacío.
		i--;
	}
}//cierre de función eleminar contactos.

function mostrarContacto(){
 	var mostrar= arrayContactos.join('\n'); //nombre del array.join(juntar)
 	//('separación entre elementos del array') para hacer una impresión en pantalla de los
 	// elementos de un array separados por un salto de línea.
	alert(mostrar);
}//cierre de la función mostrar contactos

function mostrarMenu(){	
 	if (escribir==false){
 		var res = document.getElementById("respuesta");
		for(contador=0; contador <= arrayContactos.length-1; contador++){
		res.innerHTML += " " + contador + ".-" +arrayContactos[contador]+"<br>";
		// document.write(" " + contador + ".- " + arrayContactos[contador] + "<br/>");
 		}
 		escribir=true;
 	}
 	else{
 		var res = document.getElementById("respuesta");
 		res.innerHTML=""; //en el html siempre dentro de un div vacío
		for(contador=0; contador <= arrayContactos.length-1; contador++){
		res.innerHTML += " " + contador + ".-" +arrayContactos[contador]+"<br>";
		// document.write(" " + contador + ".- " + arrayContactos[contador] + "<br/>");
 		}
 	}		
}//cierre de la función mostrar menu

function buscarContacto(){
 	var posicion = prompt ("Introduzca la posición a buscar:");
	var posReal = posicion - 1;
	if ((arrayContactos==null)||(arrayContactos==undefined)||(arrayContactos=="")){
		alert("Esa posición no existe.");
	} 
		else if ((posReal<0) ||(posReal>=arrayContactos.length)){
			alert("La posición que has introducido está fuera de rango.");
		}
	else{
		alert("El contacto buscado es: "+arrayContactos[posReal]);
	}	
}//cierre de la función buscar contactos

function salirAgenda(){}		