// Datas em js

const hoje = new Date();
const aniv = new Date('1984-07-26');

console.log(hoje)
console.log(aniv);

// várias formas de passar a data
let data = new Date('julho 26 1984');
let data = new Date('1984-07-26');
console.log(data);



let data = new Date('2021-02-01')
let output;
output = data.getMonth(); // numero do mes é base 0 (jan=0) 
output = data.getFullYear(); // ano 
output = data.getDate(); // dia do mes
output = data.getDay(); // mostra dia da semana é base 0 (Domingo=0)
output = data.getMinutes(); // minutos
output = data.getHours(); // horas

// as operações acima podem ser modificadas pelo set 

data.setFullYear(2000); // muda o ano para 2000

console.log(output);