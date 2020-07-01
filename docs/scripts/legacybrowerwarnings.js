"use strict";
alert("hi");
function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) // If Internet Explorer, return version number
     {
        alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    }
    else // If another browser, return 0
     {
        alert('otherbrowser');
    }
    return false;
}
