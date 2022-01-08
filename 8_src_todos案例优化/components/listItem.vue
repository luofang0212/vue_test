<template>
     <!-- 任务列表 -->
    <li @mouseleave="handleBlur(todo)">
        <input class="check-kuan" type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
        <!-- 显示任务名称 -->
        <p v-show="!todo.isEdit">{{todo.title}}</p>

        <!-- 显示输入的可编辑框 -->
        <input v-show="todo.isEdit" 
        class="todo-name" 
        type="text" 
        v-model="titleName" 
        @blur="handleBlur(todo)"
        @keyup.enter="handleBlur(todo)"
        ref="titleInput">

        <a class="btn btn-del" href="javascript:;" @click="handleDel(todo.id)">删除</a>
        <a class="btn btn-edit" href="javascript:;" 
        @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</a>
    </li>


</template>

<script>
export default {
    name: 'listItem',
    props:['todo'],
    data(){
        return {
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
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
            }else{
                console.log("没有有isEdit")
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(function(){
                this.$refs.titleInput.focus()
            })
        },
        handleBlur(todo){
            todo.isEdit = false
            // console.log(this.titleName)
            if(this.titleName.trim() == '') {
                this.titleName = this.todo.title
                return alert("任务内容不能为空")
            }else if(this.titleName.trim() === todo.title){
                return
            }
            this.$bus.$emit('editTodo',todo.id,this.titleName)
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
    