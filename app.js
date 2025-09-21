// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    amigos.push(amigo);
    console.log(amigos);
}