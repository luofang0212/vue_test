<template>
     <!-- 添加todo框 -->
    <div class="add-todo">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 添加todo */
.add-todo {
    box-sizing: border-box;
    width: 576px;
    height: 38px;
}

.add-todo input{
    box-sizing: border-box;
    padding: 0 5px;
    width: 576px;
    height: 38px;
    line-height: 38px;
    color: #333;
    font-size: 14px;
    border:1px solid #ccc;
    border-radius: 5px;
}
</style>