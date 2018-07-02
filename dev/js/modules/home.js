(function() {
  if(document.getElementById('home')) {
    new Vue({
      el: '#home',

      mounted() {
        fetch('/assets/static/book.json')
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
          const MAX = 4;
          let orderbooks = this.books.sort((a, b) => a.publicationko > b.publicationko ? -1 : 1);
          return orderbooks.slice(0, MAX);
        }
      },

      methods: {
        getPic(imgsrc) {
          return imgsrc !== '-' ? '/assets/img/book/' + imgsrc : '/assets/img/book/blank.jpg';
        }
      }
    });
  }
})();
