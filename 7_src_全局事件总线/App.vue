<template>
  <div id="app">
    <h3>{{msg}}</h3>
    <hr>
    <!-- 通过父组件给子组件通过函数类型的props实现：子给父传递数据 -->
    <School/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 第一种方式 -->
    <Student/>

  </div>
</template>

<script>

import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {School,Student},
  data() {
    return {
      msg: '你好啊！'
    }
  },
  methods: {
   
  }
}
</script>

<style>
  #app {
    padding: 2px 10px;
    background: #ccc;
  }
  p{
    color: rgb(30, 20, 168);
  }
</style>
