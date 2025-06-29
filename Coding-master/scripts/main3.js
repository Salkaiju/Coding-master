function teclaPressionada(event) {
    var tecla = event.key; 
    alert("Tecla pressionada: " + tecla);
}
document.addEventListener("keydown", teclaPressionada);