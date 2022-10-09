const display = document.querySelector("#display");
// Reconoce todos los elementos que sean button
const buttons = document.querySelectorAll("button");

// Vamos a recorrer todos los botones
// Con una funcion flecha voy a identificar que boton estoy presionando
// Con item puedo recorrer todos los botones, item tiene toda la info
// de todos los botones porque lo estoy mapeando con forEach
buttons.forEach((item) => {
  // Quiero reconocer los eventos onclick, le doy la funcionalidad de
  // flecha a todos los eventos oncklic para reconocer a quien le he dado click
  item.onclick = () => {
    // Significa que quiero borrar
    if (item.id == "clear") {
      // Elimino cualquier texto
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""),2000);
    } else {
        display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
}
