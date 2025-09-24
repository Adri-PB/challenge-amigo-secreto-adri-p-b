// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se Desarrollará una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quien es el amigo secreto

let amigos = [];

//Agregar el nombre de Amigos
function agregarAmigo() {

    //Se obtiene el nombre del amigo escrito en el recuadro
    let nombres = document.getElementById("amigo").value.trim();
    
    // Si se encuentra vacio, pedira un nombre
    if (nombres === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Que no se repitan nombres.
    if(amigos.some(amigo => amigo.toLowerCase() === nombres.toLowerCase())){
        alert("No pueden repetirse nombres.");
        return;
    }
    //Se actualiza el array de amigos
    amigos.push(nombres);

    //Agregar nombres.
    actualizarListaAmigos();

    //Limpiar campo de entrada
    document.getElementById("amigo").value="";

}


// Sorte en el que se seleccionara aleatoriamente el nombre de un amigo

function sortearAmigo(){

//Comprobación para que determinar que el array no este vacío.
    if(amigos.length === 0){
        alert("No hay amigos agregados en la lista.");
        return;
    } 
    
    let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
    
    let amigoElegido = amigos[indiceAleatorio];

    // Mostrar en pantalla el nombre del amigo sorteado.
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: ${amigoElegido}</li>`;
}

// Se visualiza la lista
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

// Se limpia la lista
    lista.innerHTML = "";

// Se recorre lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

