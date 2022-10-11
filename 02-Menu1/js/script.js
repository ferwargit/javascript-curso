const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
    // toggle es un activador, le damos un nombre open
    // e implemento en el css, es una clase open que creamos
    // a traves de javascript.
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list');
function activarLink() {
    list.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click',activarLink)
)
    
