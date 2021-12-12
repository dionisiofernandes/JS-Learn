// Funções 


// Criar uma função

// function declaration
// podemos passar argumentos no caso abaixo nome e sobrenome
// podemos ainda passar o valor por defeito na declaração da função

function ola(nome = '', sobrenome = '') {
    console.log(`olá ${nome} ${sobrenome}, Bemvindo ao meu site!`);
}
// uma função deve ser chamada

ola('Luís', 'Dionísio Fernandes');


// criar uma função para devolver um valor 

function adicao(numero1, numero2) {
    return numero1 + numero2
};

let resultado = adicao(1, 2);
resultado = adicao(10, 20);
resultado = adicao(5, 8);

console.log(resultado);


////// Fuction Expressions 

const sum = function(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}

console.log(sum(3, 3));
console.log(sum(4, 8));
console.log(sum(14, 18));
console.log(sum(24, 28));
// Quando não passamos nenhum valor, assume o definido na função por defeito 
console.log(sum());


////// funções que são invocadas de imediato(IIFEs - Imidiatly Invoked Fuction Expression)
(function() {
    console.log('Yap, isto é ima IIFE')
})();

// Passar argumentos:
(function(tecnologia) {
    console.log('Aprendendo ' + tecnologia + '!!')
})('JavaScript');

// property methods
const musicPlayer = {
    play: function(id) {
        console.log(`A tocar a musica com o ID; ${id}`)
    },
    pause: function() {
        console.log('Pause...')
    }
}

musicPlayer.play(30);
musicPlayer.pause();

// metodos podem estar fora dos objetos 

musicPlayer.remove = function(id) {
    console.log(`Música com o ID ${id} removida da playlist!`)
}

musicPlayer.remove(20);

// funções nativas do JS

console.log('Aprendendo Javascript');
alert('Cuidado!!');
prompt('Qual o teu nome?');
confirm('Queres continuar?')