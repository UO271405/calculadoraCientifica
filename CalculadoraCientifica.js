"use strict";
class CalculadoraBasica {
    
    constructor (){
        this.pantalla = "";
        this.operacionesReales = "";
        this.valorEnMemoria = "";
        this.resuelto = false;
        this.expFunction = false;
        this.potenciaAIntroducir = false;
    }
    digitos(digito){    //solo se puede elevar a un numero de un digito
        if(this.potenciaAIntroducir == true){
            this.operacionesReales += digito + ")";
            this.pantalla += digito;
            document.getElementById("pantalla").value = this.pantalla;
            this.potenciaAIntroducir = false;
        }
        else if(this.expFunction == true){
            var str = "1";
            for (let index = 0; index < digito; index++) {
                str += "0";
            }
            this.operacionesReales += str;
            this.pantalla += digito;
            document.getElementById("pantalla").value = this.pantalla;
            this.expFunction = false;
        }else{
            if(this.resuelto == true && digito != 0){
                this.operacionesReales = "";
                this.pantalla = "";
                document.getElementById("pantalla").value = "";
                this.resuelto = false;
            }
            this.pantalla += digito;
            this.operacionesReales += digito;
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    punto(){
        this.pantalla += ".";
        this.operacionesReales += ".";
        document.getElementById("pantalla").value = this.pantalla;
    }
    suma(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "+";
        this.operacionesReales += "+";
        document.getElementById("pantalla").value = this.pantalla;
    }
    resta(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "-";
        this.operacionesReales += "-";
        document.getElementById("pantalla").value = this.pantalla;
    }
    multiplicacion(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "*";
        this.operacionesReales += "*";
        document.getElementById("pantalla").value = this.pantalla;
    }
    division(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "/";
        this.operacionesReales += "/";
        document.getElementById("pantalla").value = this.pantalla;
    }
    mrc(){
        if(this.pantalla == "" || !isNaN(document.getElementById("pantalla").value)){ //si no hay nada en la pantalla o es un numero sin ningun signo al lado
            this.pantalla = this.valorEnMemoria;    //la memoria sera el nuevo numero a computar
            document.getElementById("pantalla").value = this.pantalla;
        }else{  //si quieres usar ese valor en memoria para la operación que ya está en pantalla
            this.pantalla += this.valorEnMemoria;
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    mMenos(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "-" + document.getElementById("pantalla").value);   //restarselo a la memoria
        }
    }
    mMas(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "+" + document.getElementById("pantalla").value);   //sumarselo a la memoria
        }
    }
    borrar(){
        this.pantalla = "";
        this.operacionesReales = "";
        this.valorEnMemoria = "";
        document.getElementById("pantalla").value = this.pantalla;
    }
    igual(){    //es diferente de la calculadora del ejercicio 3, en esta calculadora añadi un nuevo atributo
        try {
            var result = eval(this.operacionesReales);
            if(typeof result == "number"){
                this.pantalla = result.toString();
                this.operacionesReales = result.toString();
                document.getElementById("pantalla").value = this.pantalla;
                this.resuelto = true;
            }
        } catch (error) {   //reset
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }
    }
    
}
class CalculadoraCientifica extends CalculadoraBasica{
    constructor(){
        super();
    }
    borrarMemoria(){
        this.valorEnMemoria = "";
    }
    seno(digit){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "sin(" + digit + ")";
            this.operacionesReales += "+Math.sin(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    coseno(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "cos(" + digit + ")";
            this.operacionesReales += "+Math.cos(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    tangente(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "tan(" + digit + ")";
            this.operacionesReales += "+Math.tan(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    arcoseno(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "asin(" + digit + ")";
            this.operacionesReales += "+Math.asin(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    arcocoseno(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "acos(" + digit + ")";
            this.operacionesReales += "+Math.acos(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    arcotangente(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        if(isNaN(digit)){
            this.borrar();
            document.getElementById("pantalla").value = "ERROR";
        }else{
            this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
            this.operacionesReales = this.pantalla.slice(0,-lengthLastNumber);
            this.pantalla += "atan(" + digit + ")";
            this.operacionesReales += "+Math.atan(" + digit + ")";
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    exponente(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);
        this.pantalla += "*10^";
        this.operacionesReales += digit + "*";
        this.expFunction = true;
        document.getElementById("pantalla").value = this.pantalla;
    }
    raizCuadrada(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
        this.pantalla += "√" + digit;
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);
        this.operacionesReales += "Math.pow(" + digit + ",1/2)";
        document.getElementById("pantalla").value = this.pantalla;
    }
    elevadoA(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        this.pantalla += "^";
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);
        this.operacionesReales += "Math.pow(" + digit + ",";
        this.potenciaAIntroducir = true;
        document.getElementById("pantalla").value = this.pantalla;
    }
    delete(){
        var tieneSimbolo = false;
        for (let index = 0; index < this.pantalla.length; index++) {
            if(this.pantalla.charAt(index) == "+" || this.pantalla.charAt(index) == "-" || this.pantalla.charAt(index) == "*" || this.pantalla.charAt(index) == "/"){
                tieneSimbolo = true;
                break;
            }
        }
        if(tieneSimbolo){
            var counter = 0;
            for(let index=this.pantalla.length-1; index >= 0; index--){   //para saber cuantos numeros hay que remover
                if(!isNaN(this.pantalla.charAt(index))){
                    counter++;
                }else{
                    break;
                }
            }
            this.pantalla = this.pantalla.slice(0,-counter);
            this.operacionesReales = this.operacionesReales.slice(0,counter);

        }else{  //es solo un numero
            this.pantalla = "";
            this.operacionesReales = "";
        }
        document.getElementById("pantalla").value = this.pantalla;
    }
    getLengthOfLastNumber(){
        var tieneSimbolo = false;
        for (let index = 0; index < this.pantalla.length; index++) {
            if(this.pantalla.charAt(index) == "+" || this.pantalla.charAt(index) == "-" || this.pantalla.charAt(index) == "*" || this.pantalla.charAt(index) == "/"){
                tieneSimbolo = true;
                break;
            }
        }
        if(tieneSimbolo){
            var counter = 0;
            for(let index=this.pantalla.length-1; index >= 0; index--){   //para saber cuantos numeros hay que remover
                if(!isNaN(this.pantalla.charAt(index))){
                    counter++;
                }else{
                    return counter;
                }
            }
        }else{
            return this.pantalla.length;
        }
    }
    fact() {
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        this.pantalla += "!";
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);
        this.operacionesReales += this.calcularFactorial(digit);
        document.getElementById("pantalla").value = this.pantalla;
    }
    calcularFactorial(n){
        var total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total.toString(); 
    }
    logaritmoNeperiano(){
        this.neperiano = true;
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);
        this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
        this.pantalla += "ln(" + digit + ")";
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);
        this.operacionesReales += Math.log(digit).toString();
        document.getElementById("pantalla").value = this.pantalla;
    }
    parentesisIzq(){
        this.pantalla += "(";
        this.operacionesReales += "(";
        document.getElementById("pantalla").value = this.pantalla;
    }
    parentesisDer(){
        this.pantalla += ")";
        this.operacionesReales += ")";
        document.getElementById("pantalla").value = this.pantalla;
    }
    diezElevadoA(){
        var str = document.getElementById("pantalla").value;
        var lengthLastNumber = this.getLengthOfLastNumber();
        var digit = str.substr(str.length-lengthLastNumber,str.length);

        this.pantalla = this.pantalla.slice(0,-lengthLastNumber);
        this.operacionesReales = this.operacionesReales.slice(0,-lengthLastNumber);

        this.pantalla += "10^(" + digit + ")";
        this.operacionesReales += Math.pow(10,digit);
        
        document.getElementById("pantalla").value = this.pantalla;
    }
}
var calculadora = new CalculadoraCientifica();