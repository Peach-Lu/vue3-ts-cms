import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/type'
import login from '@/store/login/login'
import system from '@/store/main/system/system'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'Peach',
      age: 19,
      height: '1.88'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
