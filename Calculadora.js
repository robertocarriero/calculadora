// En este archivo  js vamos a crear todas las funciones aritmeticas para que funcione la calculador
// Va a se una clase por eso la nombramos en mayusculas y va a contener varios objetos

// Comenzamos por la clase donde van a poner los metodos para realizar las operaciones
class Calculadora {
    sumar(num1, num2){
        return( num1 + num2);
    }
    restar(num1, num2){
        if (num1 !== num2){
            return(num1-num2);
        }
        else if (num1==num2){
            return("0") ;
        }
    }
    multiplicar(num1, num2){
        if(num1 !== 0 && num2 !==0)
        return( num1 * num2);
        else if(num1 !== 0 && num2 == 0){
            return("0");
        }
    }
    dividir(num1 , num2){
        return( num1 / num2);
    }

    
    
}
