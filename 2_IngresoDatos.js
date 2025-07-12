
/// *** 2. Ingreso de Datos por Teclado ****///
//  Usar prompt() para pedir datos al usuario.
const prompt = require("prompt-sync")();

// !  Ejercicio 1:
//  •Pide al usuario su año de nacimiento con prompt().
let añoActual = prompt("Ingrese el año actual: ");
let añoNacimiento = prompt("Ingrese el año en el que naciste: ");

//  •Calcula su edad.
edad = añoActual - añoNacimiento;

//  •Muestra.
console.log("Su edad es: ", edad, " años");


// !  Ejercicio 2:
//  •Pide dos números con prompt().
let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");

//  •Convierte los datos a número.
num1 = Number(num1);
num2 = Number(num2);

//  •Muestra la suma en consola.
console.log("La suma de ", num1, " y ", num2, " es ", (num1 + num2));
