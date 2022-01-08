// 求和相关配置
export default {
    namespaced: true,
    actions:{
        // 当前求和为奇数加
        addOdd(context,value){
            console.log('actions的addOadd被调用了')
            if(context.state.sum % 2){
                context.commit('ADDMETHOD',value)
            }
        },
        // 等一等再加
        addWait(context,value){
            console.log('actions的addWait被调用了')
            setTimeout(() => {
                context.commit('ADDMETHOD',value)
            }, 500);
        }

    },
    mutations:{

        // 自加
        ADDMETHOD(state,value){
            console.log('mutations的ADDJIA被调用了')
            state.sum += value
        },
        // 自减
        SUBMETHOD(state,value){
            console.log('mutations的SUBMETHOD被调用了')
            state.sum -= value
        }
    },
    state:{
        sum: 0,
        school: '尚硅谷',
        name: '张三'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }

}