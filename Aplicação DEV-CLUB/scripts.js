/* Variáveis 
- var / jeito antigo -  NÂO USE !
- let / Valor pode ser alterado.
- const / Valor mantém o mesmo sempre, constante!
*/

/* Funções
Um trexo de código que, só é executado, quando é chamado.
*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left= "50%"
    form.style.transform= "translateX(-50%)"
    mascara.style.visibility= "visible"
}

function esconderForm(){
    form.style.left= "-300px"
    form.style.transform= "translateX(0)"
    mascara.style.visibility= "hidden"        
}

