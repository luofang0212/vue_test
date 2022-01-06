<template>
  <div id="app">
    <h3>{{msg}}</h3>
    <p v-show="schoolName">学校: {{schoolName}}</p>
    <p v-show="studentName">学生: {{studentName}}</p>
    <hr>
    <!-- 通过父组件给子组件通过函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 第一种方式 -->
    <Student v-on:atguigu="getStudentName" @getAge="getStudentAge"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 第二种方式 -->
    <!-- <Student ref="student"/> -->
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
      msg: '你好啊！',
      schoolName:'',
      studentName :''
    }
  },
  methods: {
    getSchoolName(name){
      console.log('我是App组件,收到了学校名称：',name)
      this.schoolName = name
    },
    getStudentName(name){
      console.log("我是App组件，收到了学生姓名",name)
      this.studentName = name
    },
    getStudentAge(age){
      console.log("我是App组件，收到了学生年龄",age)
    }
  },
  mounted(){
    // this.$refs.student.$on('atguigu',this.getStudentName)
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
