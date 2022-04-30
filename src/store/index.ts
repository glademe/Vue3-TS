import { createStore, Store, useStore as userVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import loginModule from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '登录页面',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  //导出
  modules: {
    loginModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return userVuexStore()
}

export default store
