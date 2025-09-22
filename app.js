// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    console.log(typeof amigo);
    
    if(amigo === ""){
        alert("Por favor, ingrese el nombre de un amigo");
        return;
    } else if(amigo === " "){
        alert("Por favor, ingrese el nombre de un amigo");
        return;
    } else if(amigo === "  "){
        alert("Por favor, ingrese el nombre de un amigo");
        return;
    }

    limpiarCaja();
    amigos.push(amigo);
    console.log(amigos);

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

function sortearAmigo(){
    const nombreAleatorio = Math.floor(Math.random()*amigos.length);
    const resultado = `El nombre sorteado es: ${amigos[nombreAleatorio]}`
    console.log(`El nombre sorteado es: ${resultado}`);

    let nombreSorteado = document.getElementById("resultado");
    nombreSorteado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = resultado;
    nombreSorteado.appendChild(li);

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}

