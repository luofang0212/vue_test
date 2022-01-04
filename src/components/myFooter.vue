<template>
    <!-- 底部 -->
    <div class="todo-footer">
        <!-- 全选or全不选 -->
        <input type="checkbox">
        <!-- 统计 -->
        <div class="total">
            <span>已完成0 /</span>
            <span>全部0</span>
        </div>
        <!-- 清除 -->
        <button type="button">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 底部 */
    .todo-footer{
        box-sizing: border-box;
        padding: 0 5px;
        margin-top: 14px;
        width: 576px;
        height: 38px;
        line-height: 38px;
    }

    .todo-footer input{
        float: left;
        margin-top: 12px;
    }

    .todo-footer .total{
        float: left;
        margin-left: 12px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;
        width: 110px;
        height: 28px;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #da4f49;
        border-radius: 5px;
    }
</style>