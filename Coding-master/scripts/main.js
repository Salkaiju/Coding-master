let acordar = '';
let sair = '';

function functionPegar() {
    acordar = document.getElementById('horarioAcordar').value;
    sair = document.getElementById('horarioSair').value;
}

function functionVerif() {
    if (acordar === '' || sair === '') {
        document.getElementById('resultado').textContent = 'Resultado: Preencha os dois campos.';
        return;
    }

    // Comparação básica
    let resultado = '';
    if (acordar === sair) {
        resultado = 'Os valores são iguais.';
    } else if (acordar > sair) {
        resultado = `"${acordar}" é maior que "${sair}".`;
    } else {
        resultado = `"${acordar}" é menor que "${sair}".`;
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}