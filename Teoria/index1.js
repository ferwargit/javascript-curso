// Operadores de Asignacion
var a;
console.log(a); // undefined, no tiene valor asignado

var b = 0;
console.log(b); // 0

var c = 0;
c = c + 5; // 0 + 5
console.log(c);

// mas elegante
c = 0;
c += 5
console.log(c);

c = 1;
c = c + 5; // 1 + 5
console.log(c);

c = 2
c -= 5;
console.log(c);

c = 2
c *= 5;
console.log(c);

c = 2
// c = c / 5
c /= 5;
console.log(c);

c = 2
c **= 2;
console.log(c);

// Falta inicializar
var d;
d += 3;
console.log(d); // NaN - No es un numero
/* 
Muchos métodos de JavaScript (como son el Number constructor, parseFloat y parseInt) retornan NaN si el valor especificado en el parámetro no puede ser parseado como un número.
*/
