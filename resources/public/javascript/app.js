// JS in this file is executed BEFORE ttmachines.js is executed

// LOADING //

var target = document.getElementById('loading');
var opts = {
    lines: 13, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    rotate: 0, // The rotation offset
    color: '#eee', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: true, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: -60 // Left position relative to parent in px
};
var spinner = new Spinner(opts).spin(target);
$("#loading").css("visibility", "visible").addClass("animated fadeInLeft");

function stopSpinner() { spinner.stop(); };
function hideLoading() {
    $("#loading").addClass("animated fadeOutRight");
    setTimeout(stopSpinner, 1000);
};

// TTMACHINES //
$(document).ready(function() {
    goog.require('cljs.core');
    goog.provide('cljs.user');

    //one.browser.repl_client.repl();
});