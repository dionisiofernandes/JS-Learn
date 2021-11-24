

// não temos de definiro datatype nas variáveis - são definidas pelo seu valor 


//podemos ver na consola o type a ser devovido 
let variavel = 'teste';
console.log(typeof variavel);


// strings
variavel ='Luis';
// numero
variavel = 20;
variavel = -20;
variavel = 20.5;
//Boolean
variavel = true;
variavel= false; 
// não definido
variavel = undefined;
// null - objectos
variavel = null; 
// simbulos
variavel = Symbol('isto é um simbolo');
// array - São devolvidos na consola como objecto 
variavel = ['java', 'javaScript','C#','Puthon'];
// objectos
variavel = {
    nome: 'Luis',
    outroNome: 'Dionísio',
    soMaisUm: 'Fernandes' 
};
// datas - São devolvidos na consola como objecto 
variavel = new Date()




// strings - Mais info

//podemos usar single ou bouble quotes 
let variavel2;
variavel2 ='Luis';
variavel2 = "Luis";
// escape sempre com \ antes 

variavel2 = 'Oh, that\' good!';


// concatenar 

variavel = 'Luís';
variavel2 ='Dionisio Fernandes';

console.log('O meu nome é: '+variavel+' ' + variavel2); 


// concatenar passando para uma variavel antes

variavel = 'Luís';
variavel2 ='Dionisio Fernandes';
tudoJunto = 'O meu nome é: '+variavel+' ' + variavel2;

console.log(tudoJunto); 









