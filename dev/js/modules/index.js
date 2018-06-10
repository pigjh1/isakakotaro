require('./helpers');


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

    $('.nav-list').toggleClass('is-open');
  });
})();

// init Qna
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

(function() {
  new Vue({
    el: '#home',
    mounted() {
      fetch('/assets/js/book.json')
      .then(response => response.json())
      .then(books => {
        this.books = books;
      });
    },
    data() {
      return {
        books: []
      }
    },
    computed: {
      book() {
        const MAX = 47;

        return this.books.slice(0, MAX).sort((a, b) => a.publicationko > b.publicationko ? -1 : 1);
      }

    },
    methods: {
      getPic(imgsrc) {
        return imgsrc !== '-' ? '/assets/img/book/' + imgsrc : '/assets/img/book/blank.jpg';
      }
    }
  });
})();

(function() {
  new Vue({
    el: '#book',
    mounted() {
      fetch('/assets/js/book.json')
      .then(response => response.json())
      .then(books => {
        this.books = books;
      });
    },
    data() {
      return {
        books: []
      }
    },
    methods: {
      getPic(imgsrc) {
        return imgsrc !== '-' ? '/assets/img/book/' + imgsrc : '/assets/img/book/blank.jpg';
      }
    }
  });
})();
