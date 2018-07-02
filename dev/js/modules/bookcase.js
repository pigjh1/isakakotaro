(function() {
  if (document.getElementById('bookcase')) {
    new Vue({
      el: '#bookcase',
      mounted() {
        fetch('/assets/static/bookcase.json')
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
  }
})();
