<template>
    <div class="school">
        <h3>学校信息</h3>
        <h5>{{name}}</h5>
        <h5>{{address}}</h5>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },

    
}
</script>

<style lang="less" scoped>
    .school{
        background: pink;
    }
</style>