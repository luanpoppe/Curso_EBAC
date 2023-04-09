$(document).ready(function() {
    let botãoCadastrar = $("#botão_cadastrar")
    let formulário = $("form")
    let campoInput = $("input")
    let itemLista = $(".item_lista")

    formulário.submit(function(evento){
        evento.preventDefault()
        // botãoCadastrar.click(function(){
        let valorInput = campoInput.val()
        let inputEmParagrafo = $(`<li class="item_lista">${valorInput}</li>`)
        
        
        $(inputEmParagrafo).appendTo("ul")

        let itemLista = $(".item_lista")

        itemLista.click(function(){
            $(this).css("text-decoration", "line-through")
        })
    })

})

