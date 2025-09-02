// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación: campo vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validación: solo letras y espacios
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras.");
        input.value = "";
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Actualizar lista visible
    actualizarLista();

    // Limpiar input
    input.value = "";
}

// Función para actualizar la lista
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    // Si queda un solo amigo
    if (amigos.length === 1) {
        limpiarTodo();
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>🎉 El sorteo ha finalizado</li>`;
        return;
    }

    // Seleccionar un índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Eliminar el amigo sorteado del array
    amigos.splice(indice, 1);

    // Actualizar lista
    actualizarLista();
}

// Función para limpiar todo
function limpiarTodo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// ✅ Detectar Enter en el input y agregar el amigo
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});
