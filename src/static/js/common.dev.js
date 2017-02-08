'use strict';

var $    = require('jquery');
// common
(function() {
    var curUrl = location.href;
    var tmpUrl;

    $('.share a').each(function(i, el){
        tmpUrl = $(el).attr('href').replace('cururl', curUrl);

        $(el).attr('href', tmpUrl);
    });

    
    $('.nav-toggle').on('click', function(e) {
        e.preventDefault();

        $('.nav-list').show();
    });
})();

// initQna
(function() {
    var article = $('.qna-list .article');

    if (article.length === 0) return;

    article.addClass('hd');
    article.find('.cont').slideUp(100);

    $('.qna-list .article .trigger').click(function(){
        var myArticle = $(this).parents('.article:first');
        if(myArticle.hasClass('hd')){
            myArticle.removeClass('hd').addClass('sh');
            myArticle.find('.cont').slideDown(100);
        } else {
            myArticle.removeClass('sh').addClass('hd');
            myArticle.find('.cont').slideUp(100);
        }
    });

    $('.qna-list .hgroup .trigger').click(function(){
        var hidden = $('.qna-list .article.hd').length;
        if(hidden > 0){
            article.removeClass('hd').addClass('sh');
            article.find('.cont').slideDown(100);
        } else {
            article.removeClass('sh').addClass('hd');
            article.find('.cont').slideUp(100);
        }
    });
})();

// Book Index
(function() {
    if ($('.book-index').length === 0) return;

    require('./lib/jquery.tablesorter.js');

    $(".book-index table").tablesorter({
        cssHeader: "book-header",
        cssAsc: "book-header-sortup",
        cssDesc: "book-header-sortdown",
        headers: {
            0: { sorter: false },
            1: { sorter: false },
            2: { sorter: false },
            7: { sorter: false }
        }
    });
})();