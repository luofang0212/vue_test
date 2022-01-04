<template>
  <div id="app">
    根组件
    <School></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  components: { School, Student },
};
</script>
<style lang="less">
#app {
  margin: 0 20px;
}
</style>
