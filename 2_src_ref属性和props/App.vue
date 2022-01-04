<template>
  <div id="app">
    <School></School>
    <hr>
    <!-- 年龄是数字类型，默认传到子组件是字符串，需要用绑定事件进行类型转换 -->
    <Student name="李四" sex="女" :age="20"></Student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  components: {School,Student},
};
</script>
<style lang="less">
#app {
  margin: 0 20px;
}
</style>
