document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        resultado.innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
        `;
        resultado.style.display = "block";
    });

    formulario.addEventListener("reset", function() {
        resultado.style.display = "none"; // Esconde o resultado ao limpar
    });
});
