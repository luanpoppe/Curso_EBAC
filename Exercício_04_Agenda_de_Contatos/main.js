
let form = document.getElementById("form")
let nomeContato = document.querySelector("input[type=text]")
let numeroContato = document.querySelector("input[type=tel]")
let botãoCadastrar = document.querySelector("button")
let tbody = document.querySelector("tbody")
let totalContatos = document.getElementById("numero_total_contatos")
let mensagemErro = document.getElementById("mensagem_erro")

let arrayLinhasTabela = []
let arrayNomes = []
let arrayNumeros = []

tbody.innerHTML = ""
totalContatos.innerHTML = 0

let tabelaNovaLinha = ""

// 
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    if (arrayNomes.includes(nomeContato.value)) {
        mensagemErro.style.display = "block"
        mensagemErro.innerHTML = "Este nome de contato já existe. Tente novamente"
    } else if (arrayNumeros.includes(numeroContato.value)) {
        mensagemErro.style.display = "block"
        mensagemErro.innerHTML = "Este número de telefone já existe. Tente novamente"
    } else {
        mensagemErro.style.display = "none"
        
        arrayNomes.push(nomeContato.value)
        arrayNumeros.push(numeroContato.value)

        tabelaNovaLinha = "<tr>"
    
        tabelaNovaLinha += "<td>"
        tabelaNovaLinha += `${nomeContato.value}`
        tabelaNovaLinha += "</td>"
    
        tabelaNovaLinha += "<td>"
        tabelaNovaLinha += `${numeroContato.value}`
        tabelaNovaLinha += "</td>"
        
        tabelaNovaLinha += "</tr>"
    
        arrayLinhasTabela.push(tabelaNovaLinha)
    
        tbody.innerHTML = ""
    
        for (let i = 0; i < arrayLinhasTabela.length; i++){
            tbody.innerHTML += arrayLinhasTabela[i]
            console.log(tbody.innerHTML)
        }
    
        totalContatos.innerHTML = arrayLinhasTabela.length
    
        tabelaNovaLinha = ""
        nomeContato.value = ""
        numeroContato.value = ""
    }

})


