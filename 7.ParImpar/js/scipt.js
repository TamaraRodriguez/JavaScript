function parImpar(){
    var pares = 0; 
    var impares = 0;  
	var num1= parseInt(document.getElementById("num1").value);
	num1 = Number(num1);
        if(num1 % 2 == 0){ 
            pares = num1;
            document.getElementById("resultado").innerHTML="El número "+pares+" es par";
        }
        else{ 
            impares = num1;
            document.getElementById("resultado").innerHTML="El número "+impares+" NO es par";
            } 
}
