$(document).ready(function() {
    // $('.phone').mask('000 000 000');
    var menu = 0;
    $('body').on('click', function() {
        if (menu != 0) {
            $('.profile_submenu').removeClass('active');
            $('.side_menu').removeClass('active');
            $('.close_menu').removeClass('active');
            $('.dash_menu').removeClass('active');
        }
    });

    $('.menu_hamburguer').on('click', function(e) {
        e.stopPropagation();
        menu = 2;
        $('.side_menu').addClass('active');
        $('.close_menu').addClass('active');
    });
    $('.close_menu').on('click', function() {
        $('.side_menu').removeClass('active');
    });
    $('button').on('click', function(e) {
        e.preventDefault();
        $('input').attr('disabled', true);
        $('textarea').attr('disabled', true);
        alert($('.message').val())
        $('form img').fadeIn('100');
        if (($('.name').val() == '') || ($('.email').val() == '') || ($('.telefone').val() == '') || ($('.message').val() == '')) {
            $('.rsp').addClass('error').text('Por Favor preencher todos os dados')
        } else {
            let nome = $('.name').val();
            let email = $('.email').val();
            let telefone = $('.telefone').val();
            let mensagem = $('.message').val();
            $.post('email.php', {
                nome: nome,
                email: email,
                telefone: telefone,
                mensagem: mensagem
            }, function(dados) {

                if (dados.Certo) {
                    $('.rsp').addClass('certo').text(dados.Certo);
                }
                if (dados.Error) {
                    $('.rsp').addClass('error').text(dados.Error);
                }
            }, 'json');
        }
        $('input').val('').attr('disabled', false);
        $('textarea').val('').attr('disabled', false);
        $('form img').fadeOut();
    });


    $('.event_slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        navText: ["<span class='icons_arrow back ion-ios-arrow-back'></span>", "<span class='icons_arrow go ion-ios-arrow-forward'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

function services() {
    var elmnt = document.getElementById("services");
    elmnt.scrollIntoView({ behavior: "smooth" });
}

function somos() {
    var elmnt = document.getElementById("somos");
    elmnt.scrollIntoView({ behavior: "smooth" });
}

function contacto() {
    var elmnt = document.getElementById("contacto");
    elmnt.scrollIntoView({ behavior: "smooth" });
}

function start() {
    var elmnt = document.getElementById("start");
    elmnt.scrollIntoView({ behavior: "smooth" });
}