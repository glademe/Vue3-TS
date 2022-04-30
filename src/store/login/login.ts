import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestMenuByRoleId
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    //保存token
    changeToken(state, token: string) {
      state.token = token
    },
    //保存用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    //保存菜单
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      //调用工具类，拿到路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //1、执行登录
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      //2、保存token
      commit('changeToken', token)
      //保存token
      LocalCache.setCache('token', token)

      //3、实现登录逻辑，请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      //4、缓存用户信息
      LocalCache.setCache('userInfo', userInfo)

      //5、获取用户菜单
      const userMenusResult = await requestMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      //缓存menus
      LocalCache.setCache('userMenus', userMenus)
      //跳转
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: IAccount) {
      console.log('phoneLoginAction')
    },
    //加载缓存到Vuex中
    loadLocalLogin({ commit }) {
      //获取token
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (token) {
        commit('changeUserMenus', userMenus)
      }
    }
  },
  getters: {}
}

export default loginModule
