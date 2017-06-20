var arraytexto= new Array();

function leer(){
	var texto= document.formulario.cadena.value;
	arraytexto= texto.split(" ")
}

function numero() {
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "has introducido: "+ arraytexto.length;
}

function primera(){
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "La primra palabra es: "+ arraytexto[0];
}
			
function ultima(){
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "La última palabra es: "+ arraytexto.pop();
}

function inverso(){
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "el oreden inverso es: "+ arraytexto.reverse();
}

function alfabetico(){
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "el oreden inverso es: "+ arraytexto.sort();
}

function ordenadas(){
	leer();
	var texto= document.getElementById("respuesta");
	texto.innerHTML= "El orden alfabetico es : "+ (arraytexto.sort()).reverse();
}