<template>
  <div id="app">
    <Editor></Editor>
    <Todo></Todo>
    <Done></Done>
  </div>
</template>

<script>
import Todo from './components/todo'
import Done from './components/done'
import Editor from './components/editor'

export default {
  name: 'app',
  components: {
    Todo,
    Done,
    Editor
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
