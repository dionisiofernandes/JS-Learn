
const num1 = '20',
        num2 = 10,
        num3 = 'nine';

console.log(num1 + num2);

// converter num1 para numero
console.log( Number(num1) + num2);
console.log( parseInt(num1) + num2);

console.log(num3);
console.log( Number(mum3)); // devolve valor NAN (not a number)

// concatenar valor
console.log(num1 + num2);
// subtração irtá devolver mas deveremos sempre converter para numero
console.log(num1 - num2);


// mais metodos e valores

let numero;
numero=Number('20');
numero=Number('20.2102');
numero=Number(true); // devolve 1
numero=Number(false); // devolve 0

numero=Number(null); // devolve 0
numero=Number('Hello World'); // devolve NAN
numero=Number([1,2,3,4]); // devolve NAN

// Parse Int & Parse Float

numero = parseInt('100'); // devolve 100
numero = parseInt('100.5454'); // devolve 100
numero = parseFloat('100.5454'); // devolve 100.5454

console.lof(numero);
console.lof(typeof numero);

// To FIxed - Remove decimais

let numero4 = '1545.545454',
    numero5 = 545.545454;

console.log(Number(numero4).toFixed(2)); // Converte a String para numero e arredonda para (2) casas decimais
console.log(numero5.toFixed(3)); // o .toFixed() arredonta para X casas decimais


// Todos os campos preenchidos num formulario serão uma string e por isso temos várias funções que nos permitem converter. 

