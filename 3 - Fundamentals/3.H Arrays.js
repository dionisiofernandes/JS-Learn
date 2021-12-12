// crar um array

const numeros = [10,20, 30, 40];
console.log(numeros);

// devolve valor numa posição especifica no array -  primeiro valor =0 
console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);

// array of months - outra forma de crear um array

const meses =  new Array ('janeiro', 'fevereiro', 'março');

console.log(meses);

// osairrrays podem guarda valores de v+arios datatypes misturados

const ar = [1.2,'tetse', false];
console.log(ar);
// confrmar se se trata de um array
console.log(Array.isArray(ar));  

// mudar de valores de uma rray

const meses =  new Array ('janeiro', 'fevereiro', 'março');

meses[1] ='fev';
console.log(meses);

// encontrar algum valor num ar   ray
console.log(meses.indexOf('janeiro'));

// adicionar items a um array (no final)
meses.push('agosto');

// adicionar registos no inicio do array
meses.unshift('mes 0');

// adicionar items num array numa certa posição (posição para adiconar, quantos items para apagar, valor a adicionar)
meses.splice(3 ,null, 'novo mes');

// remover items de um array (final)
meses.pop();

// remover items de um array (inicio)
meses.shift();

// remover items num array numa certa posição (posição para adiconar, quantos items para apagar, !!!aqui não passamos argumento!!)
meses.splice(3 ,1,);
 
// outros metodos

// reverse - inverte a ordem dos items no array
meses.reverse();

// concatenar 2 arrsys
const array1 = [1,2,3],
    array2 = [3,4,5];

console.log(array1.concat(array2));

// ordenar elementos num array com a função .reerse() inverte a ordem da ordenação
let fruta= ['banana', 'laranjs', 'maçã','melancia'];
console.log(fruta.sort().reverse());
 

// ordenar numeros - Neste caso os numeros são ordenados pela primeiro numeor (ou seguintes se houver mais que um).
const arraynumeros = [3,1,100,5,24,75,48];
arraynumeros.sort();

console.log(arraynumeros);


// para ordenar por valor numerico:
// 1 - 9
const arraynumeros = [3,1,100,5,24,75,48];
arraynumeros.sort(function(num1, num2){
    return num1-num2
});

console.log(arraynumeros);


// 9 - 1
const arraynumeros = [3,1,100,5,24,75,48];
arraynumeros.sort(function(num1, num2){
    return num2-num1
});

console.log(arraynumeros);