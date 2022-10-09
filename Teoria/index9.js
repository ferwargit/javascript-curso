const txt = document.getElementById('resp');
async function obtenerData() {
    // fetch nos trae una Promise
    await fetch('http://127.0.0.1:5500/Teoria/data.json')
    // luego obtengo en formato json
    .then(response => response.json())
    // y tambien quiero mostrarlo en un formato json en la consola
    .then(json => console.log(json))
    // En caso de algun error tambien podemos capturarlo y verlo
    // en la consola
    .catch(error => console.log('Solicitud fallida',
    error))
}

obtenerData();