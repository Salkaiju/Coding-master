document.addEventListener("DOMContentLoaded", function() {
    const inputNome = document.getElementById("nome");
    const selectCor = document.getElementById("cor");
    const paragrafo = document.getElementById("resultado");

    function atualizarParagrafo() {
        const nome = inputNome.value;
        const cor = selectCor.value;
        paragrafo.textContent = `O nome digitado foi: ${nome} e a cor selecionada foi: ${cor}`;
    }

    inputNome.addEventListener("input", atualizarParagrafo);
    selectCor.addEventListener("change", atualizarParagrafo);
});
