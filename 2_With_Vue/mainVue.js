var app = new Vue({
  el: '#store',
  data: {
    books: []
  },
  mounted() {
    fetch("https://api.myjson.com/bins/udbm5")
      .then(function(response) {
        return response.json()
      }).then(function(data) {
        this.books = data.books;
        document.getElementById("loader").style.display = "none";
      }.bind(this));
  },
});