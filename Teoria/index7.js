const respuesta = document.getElementById('resp');
const btnEjecutar = document.getElementById('ejecuta');
// Cuando haga click en este boton quiero que ejecute
// ña funcion iniciar
btnEjecutar.addEventListener('click', iniciar);

let frutas = ['manzana','mango','fresa','pera'];

// La funcion me dice que hay 2 elementos
// function iniciar() {
//     respuesta.innerHTML = frutas.length
// }

// La funcion me dice que fruta hay en el array
// segun su indice
// function iniciar() {
//     respuesta.innerHTML = frutas[0]
// }

// Como accedo al ultimo elemento
// function iniciar() {
//     respuesta.innerHTML = frutas[frutas.length-1]
// }

// Como recorremos un array
// function iniciar() {
//     for(i = 0; i < frutas.length; i++ ) {
//         respuesta.innerText = frutas[i]
//         console.log(frutas[i]);
//     }
// }

// Ingreso una funcion para recrrer mi array
function iniciar() {
    // Puedo rescatar el item, el index y el array
    frutas.forEach(function(item,index,array){
        // Lo vamos a mostrar en la respuesta
        respuesta.innerText = array;
    })
}

// Siempre que llamamos a una API nos entrega datos
// en un formato JSON, que es un array de datos