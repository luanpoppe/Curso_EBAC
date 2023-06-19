const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: "2021",
    acelerar: function() {
        console.log("vrum")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

// console.log(carroDoJoao2)
// console.log(carroDaMaria2)

const nome = "gian"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome)
console.log(pessoa["nome"])

function exibeAtributo (nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo("nome")

pessoa.sobrenome = "souza"

if (pessoa.sobrenome){
    console.log("a pessoa tem um sobrenome")
}

