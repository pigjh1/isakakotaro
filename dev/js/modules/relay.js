(function() {
  if (document.getElementById('relay')) {
    new Vue({
      el: '#relay',
      mounted() {
        fetch('/assets/static/relay.json')
          .then(response => response.json())
          .then(posts => {
            this.posts = posts;
          });
      },
      data() {
        return {
          posts: []
        };
      }
    });
  }
})();
