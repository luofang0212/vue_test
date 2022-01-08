<template>
    <!-- 底部 -->
    <div class="todo-footer">
        <!-- 全选or全不选 -->
        <input type="checkbox" @change="handlerChecked($event)" :checked="isAll">
        <!-- 统计 -->
        <div class="total">
            <span>已完成 {{doneTotal}} /</span>
            <span>全部 {{total}}</span>
        </div>
        <!-- 清除 -->
        <button type="button" @click="handleClaer">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'myFooter',
    props:['todos'],
    data(){
        return {
            flag: false
        }
    },
    computed:{
        // 统计总数
        total(){
            return this.todos.length
        },
        // 统计已完成的数据
        doneTotal(){
            // // 方式一：reduce条件计算  
            // const doneNum = this.todos.reduce((pre,current) => {
            //     console.log('@',pre)
            //     return pre + (current.done ? 1 : 0)
            // },0)
            // return doneNum

            // 方式二
            let i = 0;
            this.todos.forEach((todo) => {
                if(todo.done == true){
                    i++
                }
            })
            return i
        },
        // 判断是否全选
        isAll(){
            if(this.total == this.doneTotal && this.total > 0 ){
                this.flag = true
            }else{
                this.flag = false
            }
            return(this.flag)
        }
    },
    methods:{
        // 全选or全不选
        handlerChecked(e){
            if(e.target.checked){
                this.flag = true
            }else{
                this.flag = false
            }
            // this.allChecked(this.flag)
            this.$emit('allChecked',this.flag)
        },
        // 通知App组件，清除所有任务内容
        handleClaer(){
            if(confirm('确定清除已完成任务？')){
                // this.clearTodos(true)
                this.$emit('clearTodos',true)
            }
        }   
    }
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