'use strict';

var $    = require('jquery');
require('bootstrap.min');

// common
(function() {
	var curUrl = location.href;
	var tmpUrl;

    $('.share a').each(function(i, el){
    	tmpUrl = $(el).attr('href').replace('cururl', curUrl);

    	$(el).attr('href', tmpUrl);
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

	var tablesorter    = require('jquery.tablesorter');

	$("table").tablesorter({
		headers: {
			0: { sorter: false },	// 0부터 시작함
			1: { sorter: false },
			2: { sorter: false },
			7: { sorter: false }
		}
	});
})();