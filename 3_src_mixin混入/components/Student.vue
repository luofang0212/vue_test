<template>
  <div class="student">
    <h1>{{msg}}</h1>
    <h4>学生姓名: {{ name }}</h4>
    <h4>学生性别: {{ sex }}</h4>
    <h4>学生年龄: {{ age }}</h4>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import {mixin,hunhe2} from '../mixin'

export default {
  name: 'Student',  
  data() {
    return {
      msg: '我是一个学生',
      name: '张三',
      sex: '男',
      age: 18
    }
  },
  mixins:[mixin,hunhe2]

}
</script>

<style lang="less" scoped>
</style>