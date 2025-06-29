function mostrarDataHora() {
    const dataHora = new Date();
    const dataHoraFormatada = dataHora.toLocaleString();
    document.getElementById("dataHora").innerText = dataHoraFormatada;
}