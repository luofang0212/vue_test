<template>
    <div class="student">
        <h3>学生信息</h3>
        <h4>姓名：{{name}}</h4>
        <h4>年龄：{{age}}</h4>
        <button @click="sendStudentName">把学生信息给School组件</button>
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
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    }
}
</script>


<style scoped>
    .student {
        background: skyblue;
    }
</style>