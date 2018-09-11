<template lang="html">
  <div id="books">
    <Book v-for="book in books" :key="book.title" :book="book"></Book>
  </div>
</template>

<script>
import Book from './Book.vue'

export default {
  name:'Bookstore',
  components:{
    Book
  },
  mounted() {
    fetch("https://api.myjson.com/bins/8zpvs")
          .then(function(response) {
            return response.json()
          }).then(function(data) {
            this.books = data.books;
          }.bind(this));
  },
  data() {
    return {
      books:[]
    }
  },

  methods: {
  },

  computed: {

  }
}
</script>

<style lang="css">
#books
{
    display: flex;
    flex-wrap: wrap;

    width: 85%;
    margin: auto;
    margin-top: 40px;
}
</style>
