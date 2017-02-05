var Ps = require('perfect-scrollbar');

$(function() {

    var params= {
        minScrollbarLength: 25,
        maxScrollbarLength: 50,
        supressScrollX: true
    };

    var columnLeft = document.querySelector('#left');        
    var columnRight = document.querySelector('#right');        



    Ps.initialize(columnLeft, params);
    Ps.initialize(columnRight, params);

    function setExpandPost(el) {

        $(el).on('click',function(e){
            var parent = $(e.currentTarget).data('parent');
            $('.' + parent + ' .excerpted').toggleClass('hide');
            $('.' + parent + ' .expanded').toggleClass('show');
        });
    }

    setExpandPost('header ul li:nth-child(2)');

});