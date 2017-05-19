a = Number(a)
b = Number(b)

function ponerNumero (a,b){
		var suma = a + b ;
            var resta = a - b;
            var multiplicacion = a * b;
            var division = a / b;
            var modulo = a % b // % También aparece como Mod, pero no siempre funciona el sistema Mod

            // document.write, tienen la misma funcionalidad que inner.HTML, es decir mostrar el texto en pantalla.
            // el + significa que concatena, y el br va en comillas porque es del HTML
            document.write ("Suma: " + a +" + " +  b + " = " + suma + "<br/>")
            document.write ("Resta: " + a +" - " +  b + " = " + resta + "<br/>")
            document.write ("Multiplicación: " + a + " * " +  b + " = " + multiplicacion + "<br/>")
            document.write ("División: " + a + " / " +  b + " = " + division + "<br/>")
            document.write ("Módulo: " + a + " mod " + b + " = " + modulo + "<br/>")

}

  
        
   
        
