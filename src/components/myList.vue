<template>
     <!-- 任务列表 -->
    <div class="todo-list">
        <listItem></listItem>
    </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
    components:{listItem}
}
</script>

<style scoped>
/* todo列表 */
.todo-list {
    margin-top: 14px;
    width: 576px;
    border-radius: 5px;
}
</style>
    