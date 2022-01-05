<template>
     <!-- 任务列表 -->
   
    <ul class="list-item">
        <li>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <p>{{todo.title}}</p>
            <a href="javascript:;" @click="handleDel(todo.id)">删除</a>
        </li>
    </ul>

</template>

<script>
export default {
    name: 'listItem',
    props:['todo','checkTodo','delTodo'],
    methods:{
        // 勾选or不勾选
        handleCheck(id){
            // 通知App组件将对应的todos的id进行取反
            this.checkTodo(id)
        },
        handleDel(id){
            // 通知App组件将对应的todos的id进行删除
            // 确认是否删除
            if(confirm('确定是否要删除？')){
                this.delTodo(id)
            }
            
        }
    }
}
</script>

<style scoped>
    .list-item{
        width: 574px;
    }

    .list-item li{
        list-style: none;
        box-sizing: border-box;
        padding: 2px 5px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #ccc;
    }

    .list-item li:hover{
        background: #ccc;
    }

    .list-item li input{
        float: left;
        margin-top: 9px;
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
        margin: 8px 5px 0 0;
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
    