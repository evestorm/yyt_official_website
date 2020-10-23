import Vue from 'vue'
import Vuex from 'vuex'
import { metaInfo } from '@/utils/const'

Vue.use(Vuex)

const state = {
	metaInfo,
	curRouteName: 'home', // 当前路由名称
};

const mutations = {
	CHANGE_META_INFO(state, metaInfo) {
		state.metaInfo = {
			...state.metaInfo,
			...metaInfo
		};
	},
	CHANGE_CUR_ROUTE_NAME(state, curRouteName) {
		state.curRouteName = curRouteName;
	}
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
