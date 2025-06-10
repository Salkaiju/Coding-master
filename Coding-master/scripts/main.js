{
    function functionPegar() {
        acordar = document.getElementById('horarioAcordar').value;
        sair = document.getElementById('horarioSair').value;
    }

    function functionVerif() {
        if (acordar === '' || sair === '') {
            document.getElementById('resultado').textContent = 'Resultado: Preencha os dois campos.';
            return;
        }

        let resultado = '';
        if (acordar === sair) {
            resultado = 'Os valores são iguais.';
        } else if (acordar > sair) {
            resultado = `"${acordar}" Acorda depois da hora de sair "${sair}".`;
        } else {
            resultado = `"${acordar}" Acorda antes da hora de sair "${sair}".`;
        }

        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}

/** Você está criando um pequeno sistema para um evento.

- Crie um objeto `visitante` com as propriedades: `nome`, `idade` e `documento`.
- Crie uma função que receba esse objeto e retorne a mensagem:  
  `"Visitante <nome>, com <idade> anos, portador do documento <documento>."`
 */

{
    function functionCadastroVisitante(){
        const visitante = {
            nome: document.getElementById('nomeVisitante').value,
            idade: document.getElementById('idadeVisitante').value,
            documento: document.getElementById('documentoVisitante').value
        };

        const mensagem = `Visitante ${visitante.nome}, com ${visitante.idade} anos, portador do documento ${visitante.documento}.`;
        document.getElementById('resultado2').textContent = mensagem;
    }
}

/** Você está criando um pequeno sistema para um evento.
Maria quer acessar um sistema protegido por senha.

- Crie uma variável `senhaCorreta` e outra `senhaDigitada`.
- Verifique se as senhas são iguais.
- Exiba no console:  
  `"Acesso permitido"` ou `"Senha incorreta"`
 */

{
    function functionVerificarSenha() {
        const senhaCorreta = '1234';
        const senhaDigitada = document.getElementById('senhaDigitada').value;

        if (senhaCorreta === senhaDigitada) {
           const mensagem = `Senha correta. Acesso permitido.`;
        document.getElementById('resultado3').textContent = mensagem;
        } else {
            const mensagem = `Senha incorreta`;
        document.getElementById('resultado3').textContent = mensagem;
        }
    }
}


/* Você está criando uma mini calculadora para um produto em promoção.

- Crie uma variável `precoOriginal` e uma `desconto` (em %).
- Calcule o preço final e mostre a seguinte mensagem:  
  `"O preço original era R$ X. Com desconto de Y%, o valor final é R$ Z."`
  */

{
    function functionCalculadoraPromocao() {
        const precoOriginal = parseFloat(document.getElementById('precoOriginal').value);
        const desconto = parseFloat(document.getElementById('desconto').value);

        if (isNaN(precoOriginal) || isNaN(desconto)) {
            document.getElementById('resultado4').textContent = 'Por favor, insira valores válidos.';
            return;
        }

        const valorDesconto = (precoOriginal * desconto) / 100;
        const precoFinal = precoOriginal - valorDesconto;

        const mensagem = `O preço original era R$ ${precoOriginal.toFixed(2)}. Com desconto de ${desconto}%, o valor final é R$ ${precoFinal.toFixed(2)}.`;
        document.getElementById('resultado4').textContent = mensagem;
    }
}


/*- 

Você está programando um sistema para organizar livros.

Crie uma classe `Livro` com `titulo`, `autor` e `ano`.
- Adicione um método `detalhes()` que:  
  `"Receba os valores do livro <titulo>, <autor> e <ano> e os exiba."`
- Crie dois livros diferentes e chame o método para ambos.
 */

{
    class Livro {
        constructor(titulo, autor, ano) {
            this.titulo = titulo;
            this.autor = autor;
            this.ano = ano;
        }

        detalhes() {
            return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
        }
    }

    function functionCriarLivros() {
        const titulo1 = document.getElementById('tituloLivro1').value;
        const autor1 = document.getElementById('autorLivro1').value;
        const ano1 = document.getElementById('anoLivro1').value;

        const titulo2 = document.getElementById('tituloLivro2').value;
        const autor2 = document.getElementById('autorLivro2').value;
        const ano2 = document.getElementById('anoLivro2').value;

        const livro1 = new Livro(titulo1, autor1, ano1);
        const livro2 = new Livro(titulo2, autor2, ano2);

        document.getElementById('resultado5').textContent = livro1.detalhes() + ' | ' + livro2.detalhes();
    }
}