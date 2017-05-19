function datos(){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var numDni = prompt("Introduce tu número de DNI");
		numDni = Number(numDni);
		if((numDni < 0) || (numDni>99999999)){
		alert("¡¡Error, el número introducido no es correcto!!");
		alert("Introduce de nuevo tu número de DNI");
		}
		else{
			var letraDni = prompt("Introduce la letra del DNI");
			var resto = numDni%23;
			if (letraDni == letras[resto]) {
				alert("El DNI " +numDni+ "-" + letraDni + " es correcto.");
			}
			else{
				alert("La letra del DNI: " +letraDni+" es incorrecta.");
				alert("Introduce de nuevo tu letra del DNI");
			}
		}	
}