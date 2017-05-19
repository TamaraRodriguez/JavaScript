  // mensaje="Funciono bien"
        
        // diaSemana utiliza CAMELCASE, es decir, primera letra de la nueva palabra en mayúsculas
        diaSemana=[" Lunes"," - martes"," - miércoles"," - jueves"," - viernes"," - sábado"," - domingo","Ya no hay más días"];

        // mensaje=diaSemana[5];

        elemento = document.getElementById("texto");
        i=0;

        /* function nombre_funcion(parámetros/argumentos que recibe la función){
            ........
            return X; para devolver el valor que queramos
        }*/
        function ponerDia(){

            if(i<7){
                elemento.innerHTML += diaSemana[i];
                i++;
            }

            else{alert('Llegaste al límite');}
         }
