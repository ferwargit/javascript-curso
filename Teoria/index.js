console.log("Hola Mundo");
// var variable = 'Hola2'; comentario
/* var variable2 = 5;
var variable3 = true; comentario de bloque*/ 
// console.log(variable);
// console.log(variable2);
// console.log(variable3);
const constante = 10;
console.log(constante);
variable3 = false;
console.log(variable3);
var numero1 = 5;
var numero2 = 6;
var respuesta = numero1 + numero2;
var respuesta2 = numero1 - numero2;
console.log("La respuesta es: " + respuesta);
console.log("La respuesta es: " + respuesta2);
// El numero 2 elevado a la potencia 3
var numero3 = 2;
var numero4 = 3;
var respuesta3 = Math.pow(numero3,numero4);
console.log(respuesta3);
// Calculo mas complejo
var numero5 = 2;
var numero6 = 3;
var respuesta4 = Math.pow(numero5,4)-(numero5/numero6+45);
console.log(respuesta4);
// Otra forma de escribir la potencia
var respuesta7 = numero1**3
console.log(respuesta7);
// Aplicamos modulo
var respuesta5 = 9%3;
console.log(respuesta5);
// Operadores Relacionales: Para comparar 2 valores
var numero7 = 3;
var numero8 = 3;
var respuesta6 = numero7 == numero8;
console.log(respuesta6);

numero7 = '3';
numero8 = 3;
respuesta6 = numero7 == numero8;
console.log(respuesta6);

numero7 = '3';
numero8 = 3;
// Verifica tambien el tipo de dato
respuesta6 = numero7 === numero8;
console.log(respuesta6);

numero7 = true;
numero8 = 3;
// Verifica tambien el tipo de dato
respuesta6 = numero7 === numero8;
console.log(respuesta6);

numero7 = 2;
numero8 = 3;
respuesta6 = numero7 != numero8;
console.log(respuesta6);

numero7 = 2;
numero8 = 3;
respuesta6 = numero7 !== numero8;
console.log(respuesta6);

numero7 = "3";
numero8 = 3;
respuesta6 = numero7 != numero8;
console.log(respuesta6);

numero7 = "3";
numero8 = 3;
respuesta6 = numero7 !== numero8;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = numero7 < numero8;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = numero7 <= numero8;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = numero7 > numero8;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = numero7 >= numero8;
console.log(respuesta6);

// Operadores Logicos
numero7 = 5;
numero8 = 3;
respuesta6 = (numero7 >= numero8) || numero1 > 6;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = (numero7 >= numero8) && numero1 > 6;
console.log(respuesta6);

numero7 = 5;
numero8 = 3;
respuesta6 = (numero7 >= numero8) && !(numero1 > 3);
console.log(respuesta6);