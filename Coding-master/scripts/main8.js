function Incrimentar() {
    const contador = document.getElementById("Contador");
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
}

function Decrementar() {
    const contador = document.getElementById("Contador");
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual - 1;
}