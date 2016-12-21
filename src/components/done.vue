<template>
  <div class="done">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 16px;">DoneList:</span>
      </div>
      <div v-for="done in this.DoneList" class="text item">
          <span class="mr20">{{ done.data }}</span>
          <span class='el-icon-close' @click='del(done.id)'></span>
      </div>
    </el-card>
</template>

<script>
import {mapState} from 'vuex'
import {commit} from '../store'

export default {
  name: 'done',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['TodoList', 'DoneList'])
  },
  methods: {
    del: function (id) {
      commit('DELETE_DONE', id)
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
