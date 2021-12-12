// const nos arrays e objetos


const novoArray = [1, 2, 3];
novoArray[0] = 'Novo elemento';
novoArray.push = 'Algo Novo';
console.log(novoArray);

// os valores de uma constante quando array ou objecto podem ser alterados de acedidos individualmente (propriedades). 



const carro = {
    modelo: 'Opel',
    Motor: 6.0
}

carro.modelo = 'Seat';

console.log(carro);