<template>
    <div>
        <h1>人员信息: </h1>
        <h3 style="color:red">count组件里的求和信息: {{sum}}</h3>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name: 'Persons',
    methods:{
        
    },
    computed:{
        ...mapState('countAbout',['sum'])
    }
}
</script>


<style lang="less" scoped>

</style>