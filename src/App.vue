<template>
  <div id="app">
    <div class="todo-container">
        <myHeader @addTodo="addTodo"/>
        <myList :todos="todos"/>
        <myFooter :todos="todos" @allChecked="allChecked" @clearTodos="clearTodos"/>
    </div>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myList from './components/myList.vue'
import myFooter from './components/myFooter.vue'


export default {
  components: {myHeader,myList,myFooter},
  data(){
    return {
       // 从localStorage读取todos,如果从localStorage读出来值为null 则给一个空数组，避免长度计算出错
       todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    // 添加todo
    addTodo(todoObj){
      // 将接收到的数据，放到todos的数组里
      this.todos.unshift(todoObj)
    },
    // 勾选or不勾选todo
    checkTodo(id){
        this.todos.forEach((todo) =>{
          if(todo.id == id){
            todo.done = !todo.done
          }
        })
    },
    // 删除任务内容
    delTodo(id){
       this.todos = this.todos.filter((todo) => {
         return todo.id !== id
       })
    },
    // 全选or全不选
    allChecked(flag){
      if(flag){
        this.todos.forEach((todo) => {
          todo.done = flag
        })
      }else{
         this.todos.forEach((todo)=>{
          todo.done = flag
        })
      }
    },
    // 清除所有已完成任务内容
    clearTodos(flag){
      console.log(flag)
      if(flag){
        this.todos = this.todos.filter((todo) => {
          return todo.done !== true
        })
      }
    },
    // 编辑任务名称
    editTodo(id,title){
      console.log(id,title)
    }
  },
  watch:{
    // 监视todos数组，有变化就存到localStorage里
    todos:{
      // 开启深度监视
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted(){
    // 将绑定的事件传递给需要的组件
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('delTodo',this.delTodo)
    this.$bus.$on('editTodo',this.editTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('delTodo')
    this.$bus.$off('editTodo')

  }
}
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

      .btn{
        display: none;
        float: right;
        margin: 8px 5px 0 0;
        text-decoration: none;
        width: 38px;
        height: 18px;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        border-radius: 2px;
    }

    .btn-del{
        color: #fff;
        background-color: #da4f49;
    }

    .btn-edit{
        color: #fff;
        background-color: #2e58e4;
    }

</style>
