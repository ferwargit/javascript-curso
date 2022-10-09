// FUNCIONES
// var: viven en todo el codigo, dentro y fuera de bloques de codigo.
// let: funciona segun el ambito local

let resultado = "capuchino";
function cafetera(ingrediente1) {
  if (ingrediente1 == "leche") {
    let resultado = "Otra cosa";
    return resultado;
  }
}

// var resultado = "capuchino";

var taza = cafetera("leche");
console.log(taza);

//var resultado = "capuchino";