const form = document.getElementById("form_atividade")
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMínima = parseFloat(prompt("Digite a nota mínima para passar:"))

let linhas = ""

form.addEventListener("submit", function(evento){
    evento.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome_atividade")
    const inputNotaAtividade = document.getElementById("nota_atividade")

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha ="<tr>"
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMínima ? imgAprovado : imgReprovado}</td>`
        linha += "</tr>"
    
        linhas += linha
    }

    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media_final_valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media_final_resultado").innerHTML = mediaFinal >= notaMínima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}