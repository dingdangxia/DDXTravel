import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexData() {
      return 
    },
    internalNum: 0,
    internalArr: ["cn", "en", "around?site_code=14", "cn", "cn", "photo?site_code=14", "around?site_code=14", "outdoor?site_code=14", "around", "en"],
    internalClass: ["cn", "en", "around", "cn", "cn", "photo", "around", "outdoor", "around", "en"],
    detailId: 28401,
    pid:33200
  },
  getters: {
    getLoc(state) {
      return {
        internalLoc: state.internalArr[state.internalNum],
        internalClass:state.internalClass[state.internalNum]
      }
    }
  },
  mutations: {
    
  },
  actions: {

  }
})
