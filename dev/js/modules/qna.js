(function() {
  let $ = require('jquery');
  let article = $('.qna-list .article');

  if (article.length === 0) return;

  article.addClass('hd');
  article.find('.cont').slideUp(100);

  $('.qna-list .article .trigger').click(function() {
    let myArticle = $(this).parents('.article:first');
    if (myArticle.hasClass('hd')) {
      myArticle.removeClass('hd').addClass('sh');
      myArticle.find('.cont').slideDown(100);
    } else {
      myArticle.removeClass('sh').addClass('hd');
      myArticle.find('.cont').slideUp(100);
    }
  });

  $('.qna-list .hgroup .trigger').click(function() {
    let hidden = $('.qna-list .article.hd').length;
    if (hidden > 0) {
      article.removeClass('hd').addClass('sh');
      article.find('.cont').slideDown(100);
    } else {
      article.removeClass('sh').addClass('hd');
      article.find('.cont').slideUp(100);
    }
  });
})();
