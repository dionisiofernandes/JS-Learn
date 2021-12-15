//Switch 

const modoPagamento = 'cash';

switch (modoPagamento) {
    case 'cash':
        console.log(`O seu modo de pagamento é: ${modoPagamento}!`);
        break;
    case 'cheque':
        console.log(`O seu modo de pagamento é: ${modoPagamento}! Os seus fundos serão ferificados antes de completar a compra!`);
        break;
    case 'cartao':
        console.log(`O seu modo de pagamento é: ${modoPagamento}! A processar!`);
        break;
    default:
        console.log('Por favor use um metodo de pagamento válido!');
        break;
}

// assignar uma variável pelo switch case 
const carros = ['Opel', 'Seat', 'Fiat'];
const selected = 2;
let carro;

switch (selected) {
    case 0:
        carro = carros[0]
        break;
    case 1:
        carro = carros[1]
        break;
    case 2:
        carro = carros[2]
        break;
}

console.log(`o carro que selecionou foi um ${carro}!`);