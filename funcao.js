import { el } from "./el.js";

//mostrar numero
export function exibir() {
    el.num = [...arguments];
    el.display.innerText += el.num
    el.igual.addEventListener('click', () => {

        let resultado = eval(el.display.innerText)
        el.display.innerText = resultado

    })

}
let k = [1, 2, 3]
el.limpar.addEventListener('click', () => {
    el.display.innerHTML = " "
})
el.apagar.addEventListener('click', () => {
    let resultado = el.display.innerText;
    el.display.innerText = resultado.substring(0, resultado.length - 1)
})