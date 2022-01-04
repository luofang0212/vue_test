<template>
    <div>
        <h1>学校信息</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校描述: {{des | mySlice}}</h2>
    </div>
</template>

<script>

export default {
    data(){
        return{
            name:'尚硅谷',
            des: '我是一个很好的学习'
        }
    }
}
</script>