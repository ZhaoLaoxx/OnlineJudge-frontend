import router from "@/router";
import store from "@/store";
import accessEnum from "@/access/accessEnum";
import AccessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  // // 如果之前没登录过，自动登录
  // if (!loginUser || !loginUser.userRole) {
  //   // 加await是为了保证等用户登录成功后，再执行后面的代码
  //   await store.dispatch("user/getLoginUser");
  // }
  const needAccess = (to.meta?.access as string) ?? accessEnum.NOT_LOGIN;
  // 要跳转的页面必须要登录
  if (needAccess !== AccessEnum.NOT_LOGIN) {
    // 如果没登录，跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已经登录了，但是权限不够，那么跳转到无权限页面
    if (!checkAccess(loginUser, needAccess as string)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
