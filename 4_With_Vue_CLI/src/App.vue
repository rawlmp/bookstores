<template>
  <div id="store">
    <h1>{{ title }}</h1>
    <Bookstore></Bookstore>
  </div>
</template>

<script>
import Bookstore from './components/Bookstore.vue'

export default {
  name: 'store',
  components: {
    Bookstore,
  },
  data(){
    return {
      title:"Bookstore WITH VUE CLI"
    }
  }
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1
{
    font-size: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;

    color: purple;
}



</style>
