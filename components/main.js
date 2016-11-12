var Ps = require('perfect-scrollbar');

window.onload = function() {

    var columnLeft = document.querySelector('#left');        

    var params= {
        minScrollbarLength: 25,
        maxScrollbarLength: 50,
        supressScrollX: true
    };

    Ps.initialize(columnLeft, params);
 
    var columnRight = document.querySelector('#right');        

    Ps.initialize(columnRight, params);
}