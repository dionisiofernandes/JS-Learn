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