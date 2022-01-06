<template>
     <!-- 任务列表 -->
    <div class="todo-list">
        <ul class="list-item">
            <listItem 
            v-for="todoObj in this.todos" 
            :key="todoObj.id" 
            :todo="todoObj" />
        </ul>
    </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
    name: 'myList',
    components: {listItem},
    props:['todos']
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
.list-item{
        width: 574px;
    }
</style>
    