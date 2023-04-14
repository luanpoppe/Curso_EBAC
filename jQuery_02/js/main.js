$(document).ready(function(){
    $("#carousel_imagens").slick({
        autoplay: true
    })

    $(".menu_hamburguer").click(function() {
        $("nav").slideToggle();
    })

    $("#telefone").mask("(SS) 00000-0000", {
        placeholder: "(__) _____-____"
    })

    $("form").validate({
        rules: {
            nome: {
                required: true
            }, 
            email: {
                required: true,
                email: true
            }, 
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }, 
            veículo_interesse: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome", 
            email: "Digite seu email"
        }, 
        submitHandler: function(param){
            console.log(param)
        }, 
        invalidHandler: function(evento, validador){
            let numero_de_incorretos = validador.numberOfInvalids()
            alert(`Existem ${numero_de_incorretos} campos não preenchidos da forma correta. Tente novamente`)
        }
    })

    $(".lista_veículos button").click(function(){
        const destino = $("#contato")

        let nomeVeículo = $(this).parent().find("h3").text()
        $("#veículo_interesse").val(nomeVeículo)
        
        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })


})