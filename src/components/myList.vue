<template>
     <!-- 任务列表 -->
    <div class="todo-list">
        <listItem 
        v-for="todoObj in this.todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
        :checkTodo="checkTodo" 
        :delTodo="delTodo"/>
    </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
    name: 'myList',
    components: {listItem},
    props:['todos','checkTodo','delTodo']
}
</script>

<style scoped>
/* todo列表 */
.todo-list {
    box-sizing: border-box;
    margin-top: 14px;
    width: 576px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
    