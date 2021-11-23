

// metodos

const frase = 'Ai a minha vida!'

let output;

// lenght - devolve o num de caracteres de uma string 
output = frase.length;
// Contat
output = frase.concat('' , 'tan, tan, tan! '); 
// Uppercase
output = frase.toUpperCase();
//Lowsercase
output = frase.toLocaleLowerCase();
// indexof
output = frase.indexOf('minha');
// substring - devolve apenas o num de caracteres (segundo param = 5) depois dos definidos no primeiro param. 
output = frase.substring(0, 5);
// substring apartir do fim 
output = frase.substring(frase.length - 4);
// slice
output = frase.slice(0, 5);
//slice apartir do fim 
output = frase.slice(-5);
// split - divide uma sting pelo separador passado no param
output = frase.split(' '); 
// replace
output = frase.replace('minha', 'nossa'); 
// include
output = frase.includes('minha');
//repeate - repete a str pelo num de vezes definidas no parametro
output = frase.repeat(2);







console.log(output);
