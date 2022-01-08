import Vue from 'vue'

// 引用Vuex插件
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personsOptions from './persons'

// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personsOptions
  }
})
