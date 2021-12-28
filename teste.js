let arrayMisto = [1, 2, '+', '+', 3, '+']
let arrayLetras = []
let arrayNumeros = []
let arrayMistoOrganizado = []
let resultado = []

function soNumeros(el) {
    return new Promise(resolve => {
        let filtro = e => parseInt(e)
        resolve(el.filter(filtro))
    })

}

function soLetras(el) {
    return new Promise(resolve => {
        let filtro = e => e !== parseInt(e)
        resolve(el.filter(filtro))
    })
}

function retirarVigula(el) {
    return new Promise(resolve => {
        let filtro = e => e.join('')
        resolve(filtro(el))
    })
}

function pegaResultado(e, v) {
    return new Promise(resolve => {
        v.push(e);
        resolve(v)
    })
}