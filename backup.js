let num = [];
let resultado = [];
// pegar o botao
let um = document.getElementById('um');
let igual = document.getElementById('igual');
let adicao = document.getElementById('adicao');


//clicar no numero
let display = document.getElementById('screen');

import { el } from "./el.js";


let pegaNumero = el => parseInt(el) // retorna um array de numeros
let txtForNumber = el => parseInt(el); //converter texto para numero
let removeVirgula = el => el.join(''); // retirar virgula
let separaString = el => el != parseInt(el) //pega string

//mostrar o numero
function mostrar() {
    num.push(...arguments);
    /* pega o sinal da operacao */
    let pegaString = num.filter(separaString)
    let operacaoSemVirgula = removeVirgula(pegaString)

    let numeros = num.filter(pegaNumero)
    let numerosSemVigura = removeVirgula(numeros)

    display.innerText = numerosSemVigura + operacaoSemVirgula



}
um.addEventListener('click', () => {
    mostrar(txtForNumber(um.innerText))
});
adicao.addEventListener('click', () => {
    mostrar('+')
});

igual.addEventListener('click', () => {
    // display.innerText = num.reduce(somar)
    console.log(num)
});


let sinais = '+'
let numeros = [1, 2, 3, 4, 5]
let arrayVazio = []


function par(n) {
    console.log(n)
    let add = n - 2
    if (add > 0) {
        par(add)
    }
}
par(numeros.length = numeros.length + numeros.length - 1)

// function contar(n) {
//     console.log(n)
//     let x = n - 1
//     if (x > 0) {
//         contar(x)
//     }
// }

// contar(3)


// let par = (limite) => {
//     let v = []
//     for (let i = 0; i <= limite.length + limite.length - 1; i = i + 2) {
//         v.push(i)
//     }
//     return v
// }
// let numerosPares = par(numeros)
// for (let i = 0; i <= numeros.length; i++) {
//     arrayVazio[numerosPares[i]] = numeros[i]
// }
// let impar = (limite) => {
//     let v = []
//     for (let i = 1; i <= limite.length + limite.length - 2; i = i + 2) {
//         v.push(i)
//     }
//     return v
// }
// let numerosImpares = impar(numeros)
// for (let i = 0; i <= numeros.length; i++) {
//     arrayVazio[numerosImpares[i]] = sinais
// }