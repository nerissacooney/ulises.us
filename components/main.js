var Ps = require('perfect-scrollbar');

$(function() {

    var params= {
        minScrollbarLength: 25,
        maxScrollbarLength: 25,
        supressScrollX: true
    };

    var breakpoint = 668;

    var columnLeft = document.querySelector('#left');     
    var columnRight = document.querySelector('#right');
    var headerInfo = $('.content-wrapper.info');

    Ps.initialize(columnLeft, params);
    Ps.initialize(columnRight, params);

    if ($(this).width() < 768) {

        $('header.left').append(headerInfo.remove());
    }

    function setExpandPost(el) {

        $(el).on('click',function(e){

            var parent = $(e.currentTarget).data('parent');
            $('.' + parent + ' .excerpted').toggleClass('hide');
            $('.' + parent + ' .expanded').toggleClass('show');

        });
    }

    setExpandPost('#info-button');

    $(window).on('resize',function(){

        if($(this).width() < 768) {
            
            $('header.left').append(headerInfo.remove());
            setExpandPost('#info-button');
        }

        if($(this).width() > 768) {
            
            $('header.right').append(headerInfo.remove());
            setExpandPost('#info-button');
        }
    });


});