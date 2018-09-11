Vue.component('store', {
  template: `
  <div id="books">
    <book v-for="book in books" :key="book.titulo" :book="book"></book>
  </div>`,

  mounted() {
    fetch("https://api.myjson.com/bins/8zpvs")
      .then(function(response) {
        return response.json()
      }).then(function(data) {
        this.books = data.books;
        document.getElementById("loader").style.display = "none";
      }.bind(this));
  },
  data() {
    return {
      books: [],
    }
  }
});