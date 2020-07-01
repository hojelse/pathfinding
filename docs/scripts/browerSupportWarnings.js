"use strict";
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
if (isOpera)
    alert("This website does not support Opera, some functions might not work as intended.");
if (isEdge)
    alert("This website does not support Edge, some functions might not work as intended.");
if (isIE)
    alert("This website does not support Internet Explorer, some functions might not work as intended.");
if (isEdgeChromium)
    alert("This website does not support Edge, some functions might not work as intended.");
if (isFirefox)
    alert("This website does not support Firefox, some functions might not work as intended.");
if (isSafari)
    alert("This website does not support Safari, some functions might not work as intended.");
