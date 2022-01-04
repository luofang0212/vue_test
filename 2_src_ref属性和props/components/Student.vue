<template>
  <div class="student">
    <h1>{{msg}}</h1>
    <h4>学生姓名: {{ name }}</h4>
    <h4>学生性别: {{ sex }}</h4>
    <h4>学生年龄: {{ MyAge + 1 }}</h4>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',  
  data() {
    return {
      msg: '我是一个学生',
      MyAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.MyAge++
    }
  },
  // 方式一：声明接收，父组件传来的数据
  // props:['name','sex','age']

  // 方式二：接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }

  //方式三：接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name:{
      type: String,
      require: true 
    },
    age:{
      type: Number,
      default: 99
    },
    sex: {
      type: String,
      require: false
    }


  }
}
</script>

<style lang="less" scoped>
</style>