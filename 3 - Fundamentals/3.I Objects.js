//criar um objeto

// Dentro de cada objeto temos também uma ou mais propriedades de qualquer tipo (incluindo objetos, arrays )

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Fernandes',
    emprego: 'Técnico de suporte',
    email: 'luis@dionisiofernandes.com',
    idade: 37,
    getIdade: function() {
        return new Date().getFullYear() - this.idade; // a keywords.this é muito importante para fazer a call dentro da função
    }
}

console.log(pessoa);
console.log(pessoa.nome + ' ' + pessoa.sobrenome);
console.log(pessoa.emprego);
console.log(pessoa.email);
console.log(pessoa.getIdade());


// criar um array de objetos

let carros = [
    { modelo: 'Opel', motor: 6.0 },
    { modelo: 'Seat', Motor: 2.0 },
    { modelo: 'Tesla', Motor: 'Electric' }
]
console.log(carros);

// apresentação com um for Loop
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i].modelo)
};