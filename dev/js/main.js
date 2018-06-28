'use strict';

let $ = require('jquery');

import { MDCTemporaryDrawer } from '@material/drawer';
const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

// common
(function() {
  let curUrl = location.href;
  let tmpUrl;

  $('.share a').each(function(i, el) {
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

(function() {
  if ($('#home').length === 0) return;

  new Vue({
    el: '#home',
    mounted() {
      fetch('/assets/data/book.json')
        .then(response => response.json())
        .then(books => {
          this.books = books;
        });
    },
    data() {
      return {
        books: []
      };
    },
    computed: {
      book() {
        const MAX = 5;
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
  if ($('#book').length === 0) return;

  new Vue({
    el: '#book',
    mounted() {
      fetch('/assets/data/book.json')
        .then(response => response.json())
        .then(books => {
          this.books = books;
        });
    },
    data() {
      return {
        type: 'text',
        order: 'no',
        books: [],
      };
    },
    computed: {
      paagBoooks() {
        let orderOpt = this.order;
        let result = this.book;

        switch (orderOpt) {
        case 'no':
          result = this.books.sort((a, b) => { return a.no > b.no ? 1 : -1; });
          break;
        case 'publicationjp':
          result = this.books.sort((a, b) => { return a.publicationjp < b.publicationjp ? 1 : -1; });
          break;
        case 'publicationko':
          result = this.books.sort((a, b) => { return a.publicationko < b.publicationko ? 1 : -1; });
          break;
        case 'title':
          result = this.books.sort((a, b) => { return a.title > b.title ? 1 : -1; });
          break;
        case 'publisher':
          result = this.books.sort((a, b) => { return a.publisher > b.publisher ? 1 : -1; });
          break;
        default:
          result = this.books;
        }

        return result;
      },
      itemsLen() {
        return this.books.length;
      },
      isImageType() {
        return !!(this.type === 'image');
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
  if ($('#bookcase').length === 0) return;

  new Vue({
    el: '#bookcase',
    mounted() {
      fetch('/assets/data/bookcase.json')
        .then(response => response.json())
        .then(photos => {
          this.photos = photos;
        });
    },
    data() {
      return {
        photos: []
      };
    },
    methods: {
      getPic(imgsrc) {
        return '/assets/img/bookcase/' + imgsrc;
      }
    }
  });
})();
