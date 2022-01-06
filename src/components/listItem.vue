<template>
     <!-- 任务列表 -->
    <li>
        <input class="check-kuan" type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
        <p v-if="(isEdit === 0)">{{todo.title}}</p>
        <input v-if="(isEdit === 1)" class="todo-name" type="text" v-model="titleName">
        <a class="btn btn-del" href="javascript:;" @click="handleDel(todo.id)">删除</a>
        <a class="btn btn-edit" href="javascript:;" @click="handleEdit(todo.id)">编辑</a>

    </li>


</template>

<script>
export default {
    name: 'listItem',
    props:['todo'],
    data(){
        return {
            // 0-查看，1-编辑
            isEdit: 0,
            titleName: this.todo.title
        }
    },
    methods:{
        // 勾选or不勾选
        handleCheck(id){
            // 通知App组件将对应的todos的id进行取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDel(id){
            // 通知App组件将对应的todos的id进行删除
            // 确认是否删除
            if(confirm('确定是否要删除？')){
                // this.delTodo(id)
                this.$bus.$emit('delTodo',id)
            }
            
        },
        // 编辑
        handleEdit(id,title){
            this.isEdit = 1
            this.titleName = this.todo.title
            this.$bus.$emit('editTodo',id,this.titleName)
        }
    }
}
</script>

<style scoped>
    
    li{
        list-style: none;
        box-sizing: border-box;
        padding: 2px 5px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #ccc;
    }
    li:last-child {
        border-bottom:none;
    }
    li:hover{
        background: #ccc;
    }

    li .check-kuan{
        float: left;
        margin-top: 9px;
        margin-right: 10px;
    }

    li:hover a{
        display: block;
    }

    li p{
        float: left;
        height: 38px;
        font-size: 16px;
        line-height: 31px;
    }

    .todo-name{
        box-sizing: border-box;
        float: left;
        font-size: 14px;
        padding: 0 2px;
        margin:5px 0 0 0;
        width: 210px;
        height: 24px;
    }
</style>
    