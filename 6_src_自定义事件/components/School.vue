<template>
    <div class="school">
        <h3>学校信息</h3>
        <h4>学校名称：{{name}}</h4>
        <h4>学校地址：{{address}}</h4>
        <button @click="sendSchoolName">把学校名称给App组件</button>
    </div>
</template>


<script>
export default {
    name: 'School',
    props:['getSchoolName'],
    data(){
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>


<style scoped>
    .school {
        background: pink;
    }
</style>