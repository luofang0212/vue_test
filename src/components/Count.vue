<template>
    <div class="count">
        <h1>求和信息: </h1>
        <h3>当前求和为: {{sum}}</h3>
        <h3>当前求和的10倍为: {{bigSum}}</h3>
        <h3>学校和学生信息: {{school + name}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1
            }
        },
        computed:{
            // 借助mapState 生成计算属性，从state中读取数据
            ...mapState('countAbout',['sum','school','name']),
            // 借助mapGetters 生成计算属性，从getters中读取数据
            ...mapGetters('countAbout',['bigSum'])
        },
        methods:{
            // 借助mapMutations生产对应的方法，方法中会调用commit去联系mutations
            ...mapMutations('countAbout',{increment:'ADDMETHOD',decrement:'SUBMETHOD'}),
            
            // 借助mapActions生产对应的方法，方法中会调用dispatch去联系actions方法
            ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'})
        }
        
    }
</script>


<style lang="less" scoped>
    .count{
        button{
            margin-left: 2px;
            padding: 0 5px;
        }
    }

</style>