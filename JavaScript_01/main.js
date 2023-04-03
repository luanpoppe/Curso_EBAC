const form = document.getElementById("form_deposito")
const nomeBeneficiário = document.getElementById("nome_beneficiário")
let formValido = false

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >=2
}

form.addEventListener("submit", function(parametro){
    parametro.preventDefault();
    
    const numeroContaBeneficiário = document.getElementById("numero_conta")
    const valorDeposito = document.getElementById("valor_deposito")
    const mensagemSucesso = `Montade de <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiário.value}</b> - Conta <b>${numeroContaBeneficiário.value}</b>`
    
    formValido = validaNome(nomeBeneficiário.value)
    if (formValido){
        const containerMensagemSucesso = document.querySelector(".mensagem_sucesso")
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = "block"
    
        nomeBeneficiário.value = ""
        numeroContaBeneficiário.value = ""
        valorDeposito.value = ""
    } else{
        const containerMensagemErro = document.querySelector(".error_message")
        containerMensagemErro.style.display = "block"
        nomeBeneficiário.style.border = "2px solid red"
    }
})

nomeBeneficiário.addEventListener("keyup", function(parametro){
    console.log(parametro.target.value)
    formValido = validaNome(parametro.target.value)
    
    if(!formValido){
        nomeBeneficiário.classList.add("error")
        // nomeBeneficiário.style.border = "2px solid red"
        document.querySelector(".error_message").style.display = "block"
    } else{
        nomeBeneficiário.style = ""
        document.querySelector(".error_message").style.display = "none"
        nomeBeneficiário.classList.remove("error")
    }
})