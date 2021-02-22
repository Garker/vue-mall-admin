import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //  用于切换菜单的闭合状态
    collapsed: false,
    //  用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    removeUserInfo(state) {
      state.user = {
        username: '',
        appkey: '',
        rule: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setUserCookie(userInfo);
    },
    removeUserInfo({ commit }) {
      commit('setUserInfo');
      removeUserCookie();
    },
  },
  modules: {},
});
