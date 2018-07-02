(function() {
  if (document.getElementById('book')) {
    new Vue({
      el: '#book',

      mounted() {
        fetch('/assets/static/book.json')
          .then(response => response.json())
          .then(books => {
            this.books = books;
          });
      },

      data() {
        return {
          type: 'image',
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
        },
        getBg(imgsrc) {
          return imgsrc !== '-' ? 'background-image: url("/assets/img/book/' + imgsrc : 'background-image: url("/assets/img/book/blank.jpg")';
        }
      }
    });
  }
})();
