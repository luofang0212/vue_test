<template>
  <div id="app">
    <div class="todo-container">
        <myHeader></myHeader>
        <myList></myList>
        <myFooter></myFooter>

    </div>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myList from './components/myList.vue'
import myFooter from './components/myFooter.vue'


export default {
  components: {myHeader,myList,myFooter},
};
</script>
<style>
  *{
      margin: 0;
      padding: 0;
  }

  /* todo框 */
  .todo-container {
      box-sizing: border-box;
      padding: 12px;
      margin: 20px auto;
      width: 600px;
      border: 1px solid #ccc;
      border-radius: 5px;
  }

</style>
