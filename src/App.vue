<template>
  <b-container id="app">
    <h3>Purchases</h3>
    <hr>
    <List />
  </b-container>
</template>

<script>
// bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 15px;
  border: 1px solid #ccc;
}
h3 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
