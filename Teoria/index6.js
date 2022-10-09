// 1ro tengo que capturar los numeros, la respuesta y cuando
// haga clic en el boton
// const txtn1 = document.querySelector("#n1");
const txtn1 = document.getElementById("n1");
const txtn2 = document.getElementById("n2");
const respuesta = document.getElementById("resp");
const btncalcular = document.getElementById("calcular");
// Evento que necesito controlar
btncalcular.addEventListener('click', calcular);
// Ahora necesito la funcion que se va a ejecutar
// para cuando haga clic en el boton
function calcular() {
    const op1 = parseFloat(txtn1.value);
    const op2 = parseFloat(txtn2.value);
    let resp = op1 + op2;
    respuesta.innerText = resp;
    respuesta.style = 'color: red';
}