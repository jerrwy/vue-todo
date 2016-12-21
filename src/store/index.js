import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import {localStoragePlugin} from '../plugin/localStoragePlugin'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  mutations,
  plugins: [localStoragePlugin]
})
export const dispatch = store.dispatch
export const commit = store.commit
