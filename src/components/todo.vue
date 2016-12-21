<template>
  <div class="todo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 16px;">TodoList:</span>
      </div>
      <div v-for="todo in TodoList" class="text item">
          <el-input
            class="mr20"
            :autofocus="test"
            @keyup.enter.native='commit_todo'
            @blur='quit_edit'
            :value="todo.data"
            v-if="editing && editing_id === todo.id">
          </el-input>
          <span class="mr20" v-else @click='edit_todo(todo.id)'>{{ todo.data }}</span>
          <span class='el-icon-check' @click='done_todo(todo.id)'></span>
          <span class='el-icon-close' @click='del_todo(todo.id)'></span>
      </div>
    </el-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {commit} from '../store'

export default {
  name: 'todo',
  data () {
    return {
      editing: false,
      editing_id: 0,
      editing_data: '',
      test: false
    }
  },
  computed: {
    ...mapState(['TodoList', 'DoneList'])
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    done_todo: function (id) {
      commit('TODO_2_DONE', id)
    },
    del_todo: function (id) {
      commit('DELETE_TODO', id)
    },
    edit_todo: function (id) {
      this.editing = true
      this.editing_id = id
      setTimeout(() => {
        this.test = true
      }, 500)
    },
    quit_edit: function () {
      this.editing = false
      this.editing_id = 0
      this.test = false
    },
    commit_todo: function (e) {
      if (!e.target.value) return this.$message('todo不能为空')
      commit('EDIT_TODO', {id: this.editing_id, data: e.target.value})
      this.editing = false
      this.editing_id = 0
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 2px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 480px;
    margin: auto;
  }
  .mr20 {
    margin: 0 20px;
  }
</style>





dajshdakjsfbkasfvdfgdfgdfgfvcxvxcbvcbcvaaaassssdfgfgfdgnnnmc  fdgdgdgdfgxx  vvvvvvv
