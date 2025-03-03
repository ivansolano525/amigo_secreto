// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
//funcion para agregar nuevo amigo al juego
function agregarAmigo() {
    const nuevoamigo = document.getElementById('amigo');
    const amigo = nuevoamigo.value;

    if (amigo) { // verifica que la caja de texto no este en blanco 
        amigos.push(amigo); // agrega al final del array un nuevo elemento 
        actualizaramigosList(); // crea una lista para los nombres agregados
        nuevoamigo.value = '';// esta linea permite poner en blanco el campo de texto
        
    } else {
        alert("porfavor ingrese un amigo");
    }
    // Function para actualizar la lista de los nombres que se mostraran en la pagina web
function actualizaramigosList() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigos, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = amigos;
        listaAmigos.appendChild(listItem);
    });
}}
// Function para hacer el sorteo utilizando Math.random and Math.floor
function shuffleArray(amigos) {
    for (let i = amigos.length - 1; i > 0; i--) {// ejecusta la funcion hasta i-1 veces
        const j = Math.floor(Math.random() * (i + 1));  // 
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
    return amigos;
}
// Function para sortear amigos asegurandose que no pueda ser tu mismo el amigo secreto y que el listado sea par
function sortearAmigo() {
    if (amigos.length % 2 !== 0) {
        alert("Por favor agregue un participante mas para hacer la lista par.");
        return;
    }

    let shuffled;

    do {
        shuffled = shuffleArray(amigos.slice());
    } while (shuffled.some((amigo, index) => amigo === amigos[index]));

    const assignments = amigos.map((amigo, index) => ({
        amigo,
        amigoSecreto: shuffled[index]
    }));

    actualizarlistaresultados(assignments);}

// Function para mostrar la lista de resultados en la pagina web
function actualizarlistaresultados(assignments) {
    const resultList = document.getElementById('resultado');
    resultList.innerHTML = '';

    assignments.forEach(({ amigo, amigoSecreto }) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${amigo} -> ${amigoSecreto}`;
        resultList.appendChild(listItem);
    });
}
