// getters
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  // initial state
  state: () => ({
    loginUser: {
      username: "未登录",
    },
  }),
  // actions
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为从远程请求获取登录信息
      commit("updateUser", { userName: "鱼皮" });
    },
  },
  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
