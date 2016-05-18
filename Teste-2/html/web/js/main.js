function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }

}

$(function() {

    // Cria Mobile Menu
    $('nav.pri').clone().removeClass('pri').attr('id', 'nav-mobile').insertBefore('header');
    $('nav#nav-mobile .dropdown').remove();
    $('img.logo').clone().insertBefore('#nav-trigger span.lupa');
    $('#busca').clone().attr('id', 'busca-mobile').insertAfter('#nav-mobile');

    //Cria float Menu
    $('header')
        .addClass('original')
        .clone()
        .insertAfter('header')
        .addClass('cloned')
        .css('position', 'fixed')
        .css('top', '0')
        .css('margin-top', '0')
        .css('z-index', '500')
        .removeClass('original')
        .hide();

    scrollIntervalID = setInterval(stickIt, 10);

    var botaoMenu = '#nav-trigger span.menu';
    var botaoBusca = '#nav-trigger span.lupa';

    var menuContent = 'nav#nav-mobile ul';
    var buscaContent = '#busca-mobile';

    function hideItem(element, content) {
        $(content + '.expanded').removeClass('expanded');
        $(element).removeClass("open");
    }

    $(botaoMenu).click(function() {
        if ($(buscaContent).hasClass('expanded')) {
            hideItem(botaoBusca, buscaContent);
        }

        if ($(menuContent).hasClass('expanded')) {
            hideItem(this, menuContent);
        } else {
            $(menuContent).addClass('expanded');
            $(this).addClass('open');
        }
    });

    $(botaoBusca).click(function() {
        if ($(menuContent).hasClass('expanded')) {
            hideItem(botaoMenu, menuContent);
        }

        if ($(buscaContent).hasClass('expanded')) {
            hideItem(this, buscaContent);
        } else {
            $(buscaContent).addClass('expanded');
            $(this).addClass('open');
        }
    });

});
