<template>
    <div>
        <h3>学生信息</h3>
        <h5>{{name}}</h5>
        <h5>{{age}}</h5>
        <h5>{{sex}}</h5>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:"张三",
            age:18,
            sex:"男"
        }
    }
}
</script>

<style lang="less" scoped>

</style>