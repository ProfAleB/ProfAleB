let nomeUsuario = ""
let elemento = document.querySelector("#nomeUsuario");

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual seu nome?");
}

if (nomeUsuario == null){
    elemento.textContent = "ZÉ DA MANGA";
} else{
    elemento.textContent = nomeUsuario;
}


