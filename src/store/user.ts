// getters
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  // initial state
  state: () => ({
    loginUser: {
      username: "未登录",
      userRole: AccessEnum.NOT_LOGIN,
    },
  }),
  // actions
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为从远程请求获取登录信息
      commit("updateUser", payload);
    },
  },
  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
