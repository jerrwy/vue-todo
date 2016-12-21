<template>
  <div class="editor mid">
    <el-input placeholder='todo' icon='edit' @keyup.enter.native='edite_todo' v-model='todo'></el-input>

  </div>
</template>

<script>
import {commit} from '../store'

export default {
  name: 'editor',
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    edite_todo: function () {
      if (!this.todo) return this.$message('todo不能为空')
      commit('ADD_TODO', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style scoped>
.mid {
  margin: 0 auto;
}
.editor {
  width: 450px;
  margin-bottom: 30px;
}
</style>
