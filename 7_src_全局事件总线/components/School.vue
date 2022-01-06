<template>
    <div class="school">
        <h3>学校信息</h3>
        <h4>学校名称：{{name}}</h4>
        <h4>学校地址：{{address}}</h4>
        <p>学生信息：{{studentName}}</p>
    </div>
</template>


<script>
export default {
    name: 'School',
    data(){
        return {
            name: '尚硅谷',
            address: '北京',
            studentName: ''
        }
    },
    mounted(){
        this.$bus.$on('hello', (data) => {
            console.log('我是school组件，收到了数据',data)
            this.studentName = data
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>


<style scoped>
    .school {
        background: pink;
    }
</style>