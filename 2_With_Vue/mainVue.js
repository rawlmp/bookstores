var app = new Vue({
  el: '#store',
  data: {
    books: []
  },
  mounted() {
    fetch("https://api.myjson.com/bins/8zpvs")
      .then(function(response) {
        return response.json()
      }).then(function(data) {
        this.books = data.books;
        document.getElementById("loader").style.display = "none";
      }.bind(this));
  },
});