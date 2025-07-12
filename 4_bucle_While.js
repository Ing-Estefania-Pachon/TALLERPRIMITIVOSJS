/// **** 4. Bucle while ****///
//  Repetir código mientras una condición sea verdadera.

const prompt = require("prompt-sync")();

// ! Ejercicio 1:
//  •Pide un número con prompt().
let numero = prompt("Ingrese un número: ");
//  •Usa un while para contar desde 1 hasta ese número.
let contador = 0

while (contador <= numero){
    console.log(contador);          //  •Muestra cada número en consola.
    contador ++
}

// ! Ejercicio 2:
//  •Usa un while para seguir preguntando hasta que ingrese "1234".
let contrasenaFinal = "1234";
let intentos = 0;

while (true){
    let contrasena = prompt("Ingrese su contraseña: ");     //  •Pide una contraseña con prompt().
    intentos ++

    if (contrasena === contrasenaFinal){
        console.log("Contraseña correcta");                 //  •Cuando acierte, muestra "Contraseña correcta".
        break
    }else{
        console.log("Contraseña incorrecta");
        continue
    }
}

console.log(`Intentos realizados: ${intentos}`);
