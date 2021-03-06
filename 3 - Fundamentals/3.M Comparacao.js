// Comparação

// If, else IF
const aprenderJavaScript = true;

if (aprenderJavaScript) {
    console.log('Espetáculo!!!')
} else {
    console.log('Temos Pena!!')
}

// com a comparação
// Igual
const pontos = 100;

// Igualdade
if (pontos == 100) {
    console.log('Sim, é o mesmo');
} else {
    console.log('Nahh, é diferente');
}

// não igual
const pontos = 100;

// Igualdade
if (pontos != 100) {
    console.log('Sim, é Diferente');
} else {
    console.log('Nahh, é igual');
}

// comparação restrita
// apesar do valor ser 100 em ambos os casos, um deles é uma string e por isso o valor é falso! 
const pontos = 100;
if (pontos === '100') {
    console.log('Sim são iguais!');
} else {
    console.log('Não, são diferentes');
}

// Valodar se uma variavel tem um valor
let pontos = 100;
if (pontos) {
    console.log(`Sim e a pontuação é de: ${pontos} pontos!`);
} else {
    console.log('Nop, sem pontuação!')
}

// maior / menor que
let pagamento = 500;
let totalCart = 300;

if (pagamento >= totalCart) {
    console.log('Pagamento efetuado com sucesso!');
} else {
    console.log('Fundos insuficientes! ');
}

// else If operator
let hora = 10;

if (hora > 0 && hora <= 12) {
    console.log('Bom dia!');
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!');
} else if (hora > 18 && hora <= 24) {
    console.log('Boa noite!');
} else { // fallback 
    console.log('Hora Inválida!');
}

// Mais um exemplo mas com o operador OR
let valor = 300,
    credito = 800,
    totalCarrinho = 500;

if (totalCarrinho < valor || totalCarrinho < credito) {
    console.log('Pode Pagar em valor ou crédito!');
} else {
    console.log('Fundos insuficientes! ');
}

// mais um semelhante
let valor = 300,
    credito = 800,
    totalCarrinho = 500,
    disponivel = valor + credito;

if (totalCarrinho < valor || totalCarrinho < credito) {
    console.log('Pode Pagar em valor ou crédito!');
} else if (disponivel >= totalCarrinho) {
    console.log('Pode pagar com ambos!!');
} else {
    console.log('Fundos insuficientes! ');
}

/// Ternary operator
const loggedIn = false;

console.log(loggedIn === true ? 'O user está logado!' : 'O user não está logado');

// Equivalente com if
const loggedIn = false;

if (loggedIn === true) {
    console.log('O user está logado!')
} else {
    console.log('O user não está logado!')
}