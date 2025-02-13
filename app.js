// Crear una lista para añadir amigos
let amigos = [];

// Crear una función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    // validar entrada
    if (amigo == '') {
        alert("Por favor, inserte un nombre");
        return; // salir de la función si el campo está vacío
    }
    // añadir amigo a lista de amigos
    amigos.push(amigo);
    // limpiar el campo de texto
    document.getElementById('amigo').value = '';
    // mostramos la lista
    actualizarLista();
}

// Crear una función para mostrar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Crear una función para sortear un amigo
function sortearAmigo() {
    // validar que haya amigos disponibles
    if (amigos.length == 0) {
        alert('Debes ingresar el nombre de tus amigos primero...');
        return; // salir de la función si no hay amigos
    }
    // generar indice aleatorio
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    // obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAmigo];
    // mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSecreto;
}

