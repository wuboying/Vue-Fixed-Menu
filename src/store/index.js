import Vue from 'vue'
import Vuex from 'vuex'
import {
	INCREMENT_NUM,
	CHANGE_NUM
} from './const.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		num: 0
	},
	getters: {
		doubleNum(state) {
			return state.num * 2
		}
	},
	mutations: {
		[INCREMENT_NUM](state, params) {
			state.num+=params
		},
		[CHANGE_NUM](state, newnum) {
			state.num += newnum
		}
	},
	actions: {
		getNumberFromBackend({
			commit
		}, params) {
			// setTimeout(() => {
			// 	let newnum = Math.floor(Math.random() * 100)

			// 	//调用mutations 的方法
			// }, 1000);
				commit(CHANGE_NUM, params)
		}
	},
	modules: {}
})
