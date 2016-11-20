var jqueryDocument = $(document);
var messageDiv = $('.message');
var groundDiv = $('.ground');
var pageDiv = $('.page');

var pages = [
    'menu',
    'page1',
    'page2',
    'page3',
    'page4',
    'page5',
    'page6',
    'page7',
    'page8',
    'page9',
    'page10',
    'page11',
    'page12',
    'page13',
    'page14',
    'page15',
    'page16',
    'page17',
    'page18',
    'page19',
    'page20',
    'page21',
    'page22',
    'page23',
    'page24',
    'page25',
    'page26',
    'page27',
    'page28',
    'page29'
];

function setLoveSize() {

    var pageLeft = (jqueryDocument.width() / 2 - 500);
    var pageTop = (jqueryDocument.height() / 2 - 364);

    messageDiv.css({
        'left': pageLeft,
        'top': pageTop
    });

    var oversize = jqueryDocument.height() - 643;
    var newM = Math.round(oversize / 13);
    var resize = Number(9 + newM) >= 9 ? 9 + newM : '9';
    groundDiv.css('margin-top', resize + '%');
}

function showMessage() {
    messageDiv.fadeIn("slow");
}

function hideMessage() {
    messageDiv.fadeOut("slow");
    pageDiv.hide();
    window.location.hash = "";
}

function rabbitRun() {
    setTimeout(function () {
        var rabbitDiv = $('.rabbit');
        if (rabbitDiv.length <= 0) {
            groundDiv.append('<div class="rabbit"></div>');
            rabbitDiv.css('background', "url('images/rabbit_animation_path.gif?" + Math.random() + "')");
            setTimeout(function () {
                rabbitDiv.remove();
                rabbitRun();
            }, 33000);
        }
    }, 20000);
}

function showPage(page) {
    messageDiv.attr('class', 'message');
    var hash = window.location.hash.replace('#', '');
    if (hash != page) {
        window.location.hash = page;
    }
    pageDiv.hide();
    showMessage();
    messageDiv.addClass(page);
    $('.page[data-page="'+page+'"]').show();
}

setLoveSize();
rabbitRun();

if(window.location.hash != "") {
    var hash = window.location.hash.replace('#', '');
    showPage(hash);
}

$(window).resize(setLoveSize);

jqueryDocument.click(function (event) {
    if ($(event.target).closest('.message').length <= 0 && $(event.target).closest('.messagePanel').length <= 0 && $(event.target).closest('.board').length <= 0 && !event.target.hasAttribute('href')) {
        hideMessage();
    }
});

window.onhashchange = function () {
    var hash = window.location.hash.replace('#', '');
    if(hash != '') {
        showPage(hash);
    }
};

$('.paper1').click(function () {
    showPage('menu');
});

$('.paper2').click(function () {
    showPage('credentials');
});

$('.butmid').click(function() {
    showPage('menu');
});

$('.butback').click(function () {
    if($(this).css('cursor') == 'not-allowed') {
        return;
    }
    var hash = window.location.hash.replace('#', '');
    var pageIndex = pages.indexOf(hash)-1;

    if(pageIndex != pages.length) {
        showPage(pages[pageIndex]);
    }
});

$('.butforw').click(function () {
    if($(this).css('cursor') == 'not-allowed') {
        return;
    }
    var hash = window.location.hash.replace('#', '');
    var pageIndex = pages.indexOf(hash)+1;

    if(pageIndex != pages.length) {
        showPage(pages[pageIndex]);
    }
});

$('.butcom').click(function () {
    showPage('comments');
});
