document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form_sorteador").addEventListener("submit", function(evento) {
        evento.preventDefault()
        let numero_01 = document.getElementById("numero_01").value
        numero_01 = parseInt(numero_01)
        let numero_02 = document.getElementById("numero_02").value
        numero_02 = parseInt(numero_02)

        let soma_dos_numeros = numero_01 + numero_02

        document.getElementById("resultado_valor").innerText = soma_dos_numeros
        document.querySelector(".resultado").style.display = "block"
    })
})