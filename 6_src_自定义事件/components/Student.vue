<template>
    <div class="student">
        <h3>学生信息</h3>
        <h4>姓名：{{name}}</h4>
        <h4>年龄：{{age}}</h4>
        <button @click="addAge">点我 age++</button>
        <button @click="sendStudentName">把学生信息给App组件</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁Student组件的自定义事件</button>
    </div>
</template>


<script>
export default {
    name: 'School',
    data(){
        return {
            name: '张三',
            age: 18
        }
    },
    methods: {
        addAge(){
            console.log("我被调用拉 age")
            this.age++
        },
        sendStudentName(){
            // 触发Student组件实例身上的atguigu事件
            this.$emit('atguigu',this.name)
            this.$emit('getAge',this.age)
        },
        unbind(){
            console.log('我去解绑事件咯')
            // this.$off('atguigu') // 解绑单个自定义事件
            // this.$off(['atguigu','getAge'])  // 解绑多个自定义事件
            this.$off()  //解绑所有的自定义事件
        },
        death(){
            console.log("我被销毁了")
            this.$destroy()
        }
    }
}
</script>


<style scoped>
    .student {
        background: skyblue;
    }
</style>