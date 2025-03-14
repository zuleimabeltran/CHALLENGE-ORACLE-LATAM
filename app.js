// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Empecemos a programar con funciones, arrays, condicionales y variables (usar eso)
const listaAmigos = [];
function agregarAmigo(){
const inputAmigo= document.getElementById("amigo");
const ulListaAmigos= document.getElementById("listaAmigos");
const nombreAmigo= inputAmigo.value.trim();
if (nombreAmigo=== ""){
    alert("Por favor, inserte un nombre.");
    return; // saldra la funcion si el campo esta vacio
}
listaAmigos.push(nombreAmigo);
const nuevoAmigo= document.createElement("li");
nuevoAmigo.textContent= nombreAmigo;
ulListaAmigos.appendChild(nuevoAmigo);
inputAmigo.value= ""; //limpiara despues de agregar
}

function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
