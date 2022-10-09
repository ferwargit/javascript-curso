// async: hasta que no se termine la tarea de obtener toda la
// información del json (API) proceso no continua, queda en espera
// hasta que se complete la taea o solicitud y luego continua.
// Todo lo async se llama a traves de await esa es la regla 
async function obtenerData() {
    // Tarea que espera informacion, entonces lo realizo a traves
    // de un await
    // (1)const response = await fetch("http://127.0.0.1:5500/Teoria/data.json");
    const response = await fetch("https://api.github.com/repos/hadley/ggplot2/commits");
    // Tambien espero respuesta, aqui que lo muestre como si fuese texto
    // (1)const json = await response.text();
    const json = await response.json();
    // Lo mostramos y lo parseamos de un formato texto a uno json
    // (1)console.log(JSON.parse(json));
    console.log(json);
}

obtenerData();