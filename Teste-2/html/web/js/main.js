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

    function hideMenu(element) {
        $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
        $(element).removeClass("open");
    }

    function hideBusca(element) {
        $('#busca-mobile.expanded').removeClass('expanded').slideUp(250);
        $(element).removeClass("open");
    }

    $('#nav-trigger span.menu').click(function() {
        if ($('#busca-mobile').hasClass('expanded')) {
            hideBusca('#nav-trigger span.lupa');
        }
        if ($('nav#nav-mobile ul').hasClass('expanded')) {
            hideMenu(this);
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    $('#nav-trigger span.lupa').click(function() {
        if ($('nav#nav-mobile ul').hasClass('expanded')) {
            hideMenu('#nav-trigger span.menu');
        }

        if ($('#busca-mobile').hasClass('expanded')) {
            hideBusca(this);
        } else {
            $("#busca-mobile").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

});
