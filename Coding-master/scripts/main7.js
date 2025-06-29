function validarSenha(){
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    if (senha === "123456") {
        resultado.textContent = "Ok";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Erro.";
        resultado.style.color = "red";
    }
}