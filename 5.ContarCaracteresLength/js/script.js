function texto(){
    var text= 0;
    for(i = 0; i < 5; i++){ 
         var text1 = prompt("Introduce un primer texto");
         var long1 = text1.length;
        if(long1 >= text){ 
            text=long1;
            mostrar = text1;
        }
    }
    alert("El texto mas largo tiene: "+ text + " caracteres. Dale aceptar para ver el texto.");
    alert(mostrar);
    }