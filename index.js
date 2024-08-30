//1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);  // Saída: 91

//2

function fibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === n;
}

function verificarFibonacci() {
    let numero = document.getElementById("fibonacci").value;
    let resultado = fibonacci(parseInt(numero));

    if (resultado) {
        document.getElementById("fibonacci-resultado").innerText = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById("fibonacci-resultado").innerText = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

//3

function calcularFaturamento() {
    let valores = document.getElementById("faturamento").value.split(',').map(Number).filter(valor => valor > 0);

    let menorFaturamento = Math.min(...valores);
    let maiorFaturamento = Math.max(...valores);

    let mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    document.getElementById("faturamento-resultado").innerHTML = `
        Menor faturamento: R$${menorFaturamento.toFixed(2)}<br>
        Maior faturamento: R$${maiorFaturamento.toFixed(2)}<br>
        Dias com faturamento acima da média: ${diasAcimaDaMedia}
    `;
}

//4

function calcularPercentual() {
    let faturamentoPorEstado = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    let total = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    let resultado = "";
    for (let estado in faturamentoPorEstado) {
        let percentual = (faturamentoPorEstado[estado] / total) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }

    document.getElementById("percentual-resultado").innerHTML = resultado;
}


//5

function inverterString() {
    let s = document.getElementById("texto").value;
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    document.getElementById("inverter-resultado").innerText = invertida;
}
