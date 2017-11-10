const DEFAULT_EDITOR_SIZE = 250;

function loadEditor(selector, size, useWebcam, fragSource, solutionSource) {
    var editor = new GlslEditor(selector, {
        canvas_size: size,
        canvas_follow: false,
        canvas_float: 'right',
        theme: 'monokai',
        tooltips: true,
        exportIcon: false,
        useWebcam: useWebcam
    });

    if(fragSource) {
        editor.open(fragSource);
    }

    if(solutionSource) {
        var id = selector.id + '_solution';

        var link = document.createElement('a');
        link.classList.add('solution_link');
        link.textContent = "Show / Hide solution";

        $(selector).append(link);

        var sol_div = document.createElement('div');
        sol_div.classList.add('editor_wrap');
        sol_div.classList.add('solution_wrap');
        sol_div.setAttribute('id', id);
        $(selector).after(sol_div);

        var solutionEditor = loadEditor(sol_div, size, useWebcam, solutionSource);

        $(link).click(function () {
            $(sol_div).toggleClass('fade_out')
        });
    }

    return editor;
}

function getMyIndex() {
    var file = location.pathname.split('/').slice(-1)[0];
    return parseInt(file.substring(0, 2));
}

function getSlideUrl(index) {
    return index.toLocaleString(undefined, {minimumIntegerDigits: 2}) + "_slide.html";
}

$(document).ready(function() {
    //Navigation
    //If not template file
    if(location.pathname.split('/').slice(-1)[0].indexOf('template') === -1) {
        var myIndex = getMyIndex();
        var previous = getSlideUrl(myIndex - 1);
        var next = getSlideUrl(myIndex + 1);

        var prevNav = $('#nav_left > a:first');
        var nextNav = $('#nav_right > a:first');

        $.ajax(previous).done(function() {
            prevNav.attr('href', previous);
        }).fail(function() {
            prevNav.hide();
        })

        $.ajax(next).done(function() {
            nextNav.attr('href', next);
        }).fail(function() {
            nextNav.hide();
        })

        $('#navigation').toggle('slow');
    }

    var editors = document.querySelectorAll(".editor_wrap");
    for(var i = 0; i < editors.length; i++) {

        var hasWebcam = editors[i].hasAttribute("data-webcam");
        var shader = editors[i].getAttribute("data");
        var size = editors[i].getAttribute("data-size");

        //Null when empty
        var solution = editors[i].getAttribute("data-solution");

        loadEditor(editors[i], size || DEFAULT_EDITOR_SIZE, hasWebcam, shader, solution);
    }
});
