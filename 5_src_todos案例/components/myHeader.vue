<template>
     <!-- 添加todo框 -->
    <div class="add-todo">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'myHeader',
        props:['addTodo'],
        data(){
            return {
                title:''
            }
        },
        methods:{
            add(){
                // 校验数据不能为空
                if(this.title.trim() == ''){
                    alert('任务名称不能为空')
                    return
                }

                // 组装任务内容
                const todoObj = {
                    id: nanoid(),
                    title: this.title,
                    done: false
                }
                // 将todoObj传给App组件
                this.addTodo(todoObj)
                
                // 清空任务内容
                this.title = ''
            }
        }

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