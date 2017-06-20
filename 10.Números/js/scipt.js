function mayores(){
    var numero1 = prompt("Ingrese el primer número: ");
    var numero2 = prompt("Ingrese el segundo número: ");
    var numero3 = prompt("Ingrese el tercer número: ");

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);


    if ((numero1 == numero2) && (numero1 == numero3)){
        var resp= document.getElementById("resultado");
        resp.innerHTML= "Los números introducidos son todos iguales: "+numero1;
    } 
    else {
        if ((numero1 > numero2) && (numero1 > numero3)){
            var resp= document.getElementById("resultado");
                resp.innerHTML= "El número mayor es: "+numero1;
        }
        if ((numero2 > numero1) && (numero2 > numero3)){
             var resp= document.getElementById("resultado");
                resp.innerHTML= "El número mayor es: "+numero2;
        }
        if ((numero3 > numero1) && (numero3 > numero2)){
             var resp= document.getElementById("resultado");
                resp.innerHTML= "El número mayor es: "+numero3;
        } 
    }
}

function positivo(){
    var num = prompt("Introduce un número");
        num = Number(num);

    if (num==0){
        var resp= document.getElementById("resultado");
        resp.innerHTML= "El número es: "+num;
    } 
    else {
        if (num<0){
            var resp= document.getElementById("resultado");
            resp.innerHTML= "El número es: "+num+ " es negativo.";
        } 
        else {
            var resp= document.getElementById("resultado");
            resp.innerHTML= "El número es: "+num+ " es positivo.";
        }
    } 
}

function cifras(){
    var num = prompt("Introduce un número");
    if ((num>0) && (num<999)){
        cifras=num.length;
        var resp= document.getElementById("resultado");
        resp.innerHTML= "El número tiene: "+cifras+ " cifras.";
    } 
    else {
        var resp= document.getElementById("resultado");
        resp.innerHTML= "El número no es válido, intentelo de nuevo.";
    } 
}
