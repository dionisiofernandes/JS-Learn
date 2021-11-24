
// Template Literals ou Template strings


const produto1 = 'Pizza',
    preco1 = 30,
    produto2 = 'Hamburger',
    preco2 = 30




// Metodo antigo

let html;

html = '<ul>' + 
        '<li> Item ' + produto1 + '</li>'+
        '<li> Preço: ' + preco1 + '</li>'+
        '<li> Item ' + produto2 + '</li>'+
        '<li> Preço: ' + preco2 + '</li>'+
        '<li> Total: ' + (preco1 + preco2) + '</li>'
'</ul>'

/*
let app = document.querySelector('#app');
app.innerHTML = html;
*/

// Novo metodo (Template Literals ou Template strings)

html = `
    <ul>
        <li>Item: ${produto1} </li>
        <li>Preço: ${preco1} </li>
        <li>Item: ${produto2} </li>
        <li>Preço: ${preco2} </li>
        <li>Total: ${preco1+ preco2} </li>
    </ul>

`;


let app = document.querySelector('#app');
app.innerHTML = html;