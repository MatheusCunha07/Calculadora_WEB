var valor; // variavel que recebe o valor do campo de text
var resultado; // variavel que recebe o resultado da operação

function botao(num) { // função que concatena o numero +  operação e guarda a variavel
    valor = document.calc.visor.value += num;
}

function reseta() { // função que limpa o campo de texto
    document.calc.visor.value = ""; //
}

function calcula() { // função que recebe o valor da variavel "valor", e com a "eval" faz o calculo da  operação e o resultado é guardado na variável "resultado".
    resultado = eval(valor);
    if (resultado == undefined) {
        document.calc.visor.value = "";
    } else {
        document.calc.visor.value = resultado.toLocaleString("pt-BR");
    }

}