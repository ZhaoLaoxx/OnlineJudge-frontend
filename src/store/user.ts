// getters
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

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
    async getLoginUser({ commit, state }, paylaod) {
      // 改为从远程请求获取登录信息
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log("res = ", res);
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: AccessEnum.NOT_LOGIN,
        });
      }
    },
  },
  // mutations
  mutations: {
    updateUser(state, payload) {
      console.log("payload = ", payload);
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
