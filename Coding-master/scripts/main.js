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
    function functionCadastroVisitante() {
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

/* # EXERCÍCIOS JAVASCRIPT - ARRAY E ESTRUTURA DE REPETIÇÃO
*/

/*

Crie um array com 5 itens que você precisa comprar no mercado. 
Adicione mais doi itens através dos métodos. 
Use um loop `for` para exibir cada item.

*/

{
    function functionListaCompras() {
        let listaCompras = [];
        listaCompras.push(document.getElementById('item1').value);
        listaCompras.push(document.getElementById('item2').value);
        listaCompras.push(document.getElementById('item3').value);
        listaCompras.push(document.getElementById('item4').value);
        listaCompras.push(document.getElementById('item5').value);
        listaCompras.push('Não esquecer o Arroz');
        listaCompras.push('Não esquecer o Feijão');
        let resultado = 'Lista de Compras:<br>';
        for (let i = 0; i < listaCompras.length; i++) {
            resultado += `${i + 1}. ${listaCompras[i]}<br>`;
        }
        document.getElementById('resultado6').innerHTML = resultado;
    }
}

/*
Use um `for` para exibir os números de 1 a 10 no console.
*/

{
    function exibirNumeros() {
        numero = document.getElementById('numero').value;
        let resultado = '';
        for (let i = 1; i <= numero; i++) {
            resultado += i + ' ';
        }
        document.getElementById('resultado7').textContent = 'Números de 1 a ' + numero + ': ' + resultado;
    }
}


/*
Use um `while` para exibir os números de 10 a 1 no html.
*/

{
    function exibirNumeros2() {
        numero = document.getElementById('numero2').value;
        let resultado = '';
        let i = numero;
        while (i >= 1) {
            resultado += i + ' ';
            i--;
        }
        document.getElementById('resultado8').textContent = 'Números de ' + numero + ' a 1: ' + resultado;
    }
}

/*
Crie um array com números.  
`[10, 5, 8, 3, 2]`
Use um `for` para somar todos os valores e exibir o resultado no final.
*/

{
    function somarNumeros() {
        let numeros = [];
        numeros.push(parseInt(document.getElementById('n1').value));
        numeros.push(parseInt(document.getElementById('n2').value));
        numeros.push(parseInt(document.getElementById('n3').value));
        numeros.push(parseInt(document.getElementById('n4').value));
        numeros.push(parseInt(document.getElementById('n5').value));
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        document.getElementById('resultado9').textContent = 'Soma dos números: ' + soma;
    }
}

/*
Crie um array com nomes. 
`["Ana", "Bruno", "Carlos", "João"]` 
Use o método `join` para imprimir os nomes separados por ";".


*/

{
    function juntarNomes() {
        let nomes = [];
        nomes.push(document.getElementById('nome1').value);
        nomes.push(document.getElementById('nome2').value);
        nomes.push(document.getElementById('nome3').value);
        const resultado = nomes.join('; ');
        document.getElementById('resultado10').textContent = 'Nomes: ' + resultado;
    }
}

/*
Crie um array vazio. Adicione os números de 1 a 20.  
Use um loop para exibir **apenas os números pares**.
*/
{
    function exibirPares() {
        let numeros = [];
        numeros.push(document.getElementById('nn1').value);
        numeros.push(document.getElementById('nn2').value);
        numeros.push(document.getElementById('nn3').value);
        numeros.push(document.getElementById('nn4').value);
        numeros.push(document.getElementById('nn5').value);
        for (let i = 1; i <= numeros; i++) {
            numeros.push(i);
        }
        let resultado = 'Números pares: ';
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                resultado += numeros[i] + ' ';
            }
        }
        document.getElementById('resultado11').textContent = resultado;
    }
}


/*
Crie um array com 4 notas (números decimais). 
`[7.5, 8.0, 6.5, 9.0]` 
Use um loop para calcular a média e exiba a mensagem:  
`"A média das notas é X"`
*/

{
    function calcularMedia() {
        let notas = [];
        notas.push(parseFloat(document.getElementById('nota1').value));
        notas.push(parseFloat(document.getElementById('nota2').value));
        notas.push(parseFloat(document.getElementById('nota3').value));
        notas.push(parseFloat(document.getElementById('nota4').value));
        
        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }
        
        let media = soma / notas.length;
        document.getElementById('resultado12').textContent = 'A média das notas é ' + media.toFixed(2);
    }
}


/* 
Crie um array com suas 3 cores favoritas.  
Use um `for...of` para exibir: `"Minha cor favorita número X é Y"`
*/

{
    function exibirCoresFavoritas() {
        let cores = [];
        cores.push(document.getElementById('cor1').value);
        cores.push(document.getElementById('cor2').value);
        cores.push(document.getElementById('cor3').value);
        
        let resultado = '';
        for (let i = 0; i < cores.length; i++) {
            resultado += `Minha cor favorita número ${i + 1} é ${cores[i]}<br>`;
        }
        
        document.getElementById('resultado13').innerHTML = resultado;
    }
}

/*

Crie um array com 5 números e use um `foreach` para multiplicar todos por 2. 
`[1, 2, 3, 4, 5]` 
Exiba o novo array no final.
*/

{
    function multiplicarPorDois() {
        let numeros = [];
        numeros.push(parseInt(document.getElementById('m1').value));
        numeros.push(parseInt(document.getElementById('m2').value));
        numeros.push(parseInt(document.getElementById('m3').value));
        numeros.push(parseInt(document.getElementById('m4').value));
        numeros.push(parseInt(document.getElementById('m5').value));

        let resultado = [];
        numeros.forEach(function(numero) {
            resultado.push(numero * 2);
        });

        document.getElementById('resultado14').textContent = 'Números multiplicados por 2: ' + resultado.join(', ');
    }
}

/* Dado o array de produtos:

```
const produtos = [
  { nome: "Camisa", quantidade: 10 },
  { nome: "Calça", quantidade: 5 },
  { nome: "Tênis", quantidade: 0 },
  { nome: "Boné", quantidade: 2 },
  { nome: "Cinto", quantidade: 8 },
  { nome: "Meia", quantidade: 1 },
]; 

Use `forEach` para verificar quais produtos estão com estoque zerado ou baixo (menor que 3).
Para cada produto, exiba:
`"Produto <nome> está com estoque crítico: <quantidade> unidades."`
*/

{
    function verificarEstoque() {
        const produtos = [
            { nome: "Camisa", quantidade: 10 },
            { nome: "Calça", quantidade: 5 },
            { nome: "Tênis", quantidade: 0 },
            { nome: "Boné", quantidade: 2 },
            { nome: "Cinto", quantidade: 8 },
            { nome: "Meia", quantidade: 1 }
        ];

        let resultado = '';
        produtos.forEach(function(produto) {
            if (produto.quantidade < 3) {
                resultado += `Produto ${produto.nome} está com estoque crítico: ${produto.quantidade} unidades.<br>`;
            }
        });

        document.getElementById('resultado15').innerHTML = resultado;
    }
}
