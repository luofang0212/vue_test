<template>
    <div class="school">
        <h1>学校信息</h1>
        <h3>学校名称: {{name}}</h3>
        <h3>学校地址: {{address}}</h3>
        <button @click="showName">显示学校名称</button>
    </div>
</template>

<script>
import {mixin,hunhe2} from '../mixin'

export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京',
            a: 400
        }
    },
    mixins:[mixin,hunhe2]

}
</script>

<style lang="less" scoped>
</style>