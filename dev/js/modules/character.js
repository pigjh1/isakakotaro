(function() {
  if (document.getElementById('character')) {
    new Vue({
      el: '#character',
      mounted() {
        fetch('/assets/static/book.json')
          .then(response => response.json())
          .then(books => {
            this.books = books;
          });
      },
      data() {
        return {
          books: [],
          opt: 'ax'
        };
      },
      computed: {
        book() {
          let orderbooks = this.books.filter(function(v) {
            return v.publicationko !== '-';
          }).sort((a, b) => {
            return a.publicationko < b.publicationko ? 1 : -1;
          });
          return orderbooks;
        }
      },
      methods: {
        gotoArticle() {
          console.log('gotoArticle');
        }
      }
    });
  }
})();
