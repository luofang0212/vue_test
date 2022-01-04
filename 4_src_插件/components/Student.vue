<template>
    <div>
         <h1>学生信息</h1>
        <h2>姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <h3>个性：{{gexin | mySlice}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '张三',
            age: 20,
            gexin: '超级个性。。。。你说呢'
        }
    },
}
</script>