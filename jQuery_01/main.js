$(document).ready(function() {
    $("header button").click(function(){
        $("form").slideDown()
    })

    $("#botão_cancelar").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function(evento){
        evento.preventDefault()
        const endereçoDaNovaImagem = $("#endereço_imagem_nova").val()
        const novoItem = $("<li style='display:none'></li>")
        $(`<img src="${endereçoDaNovaImagem}">`).appendTo(novoItem)
        $(`
            <div class="overlay_imagem_link">
                <a href="${endereçoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000)
        $("#endereço_imagem_nova").val("")
    })
})