<template>
     <!-- 任务列表 -->
   
    <ul class="list-item">
        <li>
            <input type="checkbox">
            <p>xxxx</p>
            <a href="javascript:;">删除</a>
        </li>
        <li>
            <input type="checkbox">
            <p>xxxx</p>
            <a href="javascript:;">删除</a>
        </li>
        <li>
            <input type="checkbox">
            <p>xxxx</p>
            <a href="javascript:;">删除</a>
        </li>
    </ul>

</template>

<script>
export default {
    
}
</script>

<style scoped>
    .list-item{
        width: 576px;
        border-top: 1px solid #ccc;
    }

    .list-item li{
        list-style: none;
        box-sizing: border-box;
        padding: 2px 5px;
        height: 38px;
        border: 1px solid #ccc;
        border-top: none;
        line-height: 38px;
    }

    .list-item li input{
        float: left;
        margin-top: 11px;
    }

    .list-item li p{
        float: left;
        margin-left: 12px;
        height: 38px;
        font-size: 16px;
        line-height: 31px;
    }

    .list-item li a{
        float: right;
        margin: 6px 5px 0 0;
        text-decoration: none;
        display: block;
        width: 38px;
        height: 18px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 18px;
        background-color: #da4f49;
        border-radius: 2px;
    }
</style>
    