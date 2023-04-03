const form = document.getElementById("id_form")
const campoA = document.getElementById("campoA")
const campoB = document.getElementById("campoB")
const mensagemApósEnvio = document.querySelector(".mensagem_após_envio")
let formValido = false

function validação(){
    return parseInt(campoB.value) > parseInt(campoA.value)
}

form.addEventListener("submit", function(parametro){
    parametro.preventDefault();
    
    formValido = validação()
    // console.log(campoA.value)
    // console.log(campoB.value)
    // console.log(formValido)

    if (formValido){
        mensagemApósEnvio.innerHTML = "Você digitou os números corretamente, parabéns!"
        mensagemApósEnvio.style.display = "block"
        mensagemApósEnvio.classList.add("mensagem_sucesso")
        mensagemApósEnvio.classList.remove("mensagem_erro")
    
        campoA.value = ""
        campoB.value = ""
    } else{
        mensagemApósEnvio.innerHTML = "Você digitou errado! Tente novamente"
        mensagemApósEnvio.style.display = "block"
        mensagemApósEnvio.classList.remove("mensagem_sucesso")
        mensagemApósEnvio.classList.add("mensagem_erro")

        // campoA.value = ""
        // campoB.value = ""
    }
})