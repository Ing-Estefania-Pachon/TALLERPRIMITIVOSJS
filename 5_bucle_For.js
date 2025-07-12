/// **** 5. Bucle for ****///
//  Repetir código un número exacto de veces.

const prompt = require("prompt-sync")();

// !  Ejercicio 1:
//  •Usa un for para imprimir los números del 1 al 10 en consola.
for(let i = 1; i < 11; i++){
    console.log(i);
}

// ! Ejercicio 2:
//  •Pide un número con prompt().
//  •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10)
let num = prompt("Ingrese un número: ")

for(let i = 1; i < 11; i++){
    resultado = num * i
    console.log(num, " * ", i, " = ", resultado);
}
