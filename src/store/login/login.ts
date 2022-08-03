import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestLoginUserInfoById,
  requestUserMenusByIdRoleId
} from '@/service/login/ index'

import localCache from '@/utils/cache'

// type
import { IAccount } from '@/service/login/type'
import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  // 模块化给个命名空间 true
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 2.请求用户信息
      const userInfoResult = await requestLoginUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3.请求用户菜单
      const userMenuResult = await requestUserMenusByIdRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 4.跳到首页
      router.push('/main')
    }
  }
}

export default loginModule