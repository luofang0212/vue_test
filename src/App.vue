<template>
  <div id="app">
    <div class="todo-container">
        <myHeader :addTodo="addTodo"/>
        <myList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"/>
        <myFooter :todos="todos" :allChecked="allChecked" :clearTodos="clearTodos"/>
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
       todos:[
                {id: '001', title: '吃饭', done: true},
                {id: '002', title: '喝酒', done: false},
                {id: '003', title: '散步', done: true}
            ]
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
    }
  }
  
  
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
