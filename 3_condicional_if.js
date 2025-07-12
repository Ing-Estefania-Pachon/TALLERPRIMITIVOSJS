/// **** 3. Condicional if ****///
//  Tomar decisiones con if, else if, else.

const prompt = require("prompt-sync")();

// ! Ejercicio 1:
//  •Pide al usuario su edad.
let edad = prompt("Ingrese su edad: ");

if (edad >= 18){                        //  •Si es mayor o igual a 18, muestra "Puedes entrar".
    console.log("Puedes entrar");
}else{                                  // •Si no, muestra "No puedes entrar".
    console.log("No puedes entrar");
}

// ! Ejercicio 2:
//  •Pide un número.
let numero = prompt("Ingrese un número: ");

if (numero > 0){                                 //  •Si es positivo, muestra "Es positivo".
    console.log("Es positivo");

}else if (numero < 0){                           //  •Si es negativo, muestra "Es negativo".
    console.log("Es negativo");
}else{                                           //  •Si es cero, muestra "Es cero"
    console.log("Es cero");
}
