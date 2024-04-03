import accessEnum from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前用户
 * @param needAccess 需要有的权限
 */
const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  // 获取当前用户具有的权限（如果没有loginUser，则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }
  // 如果用户登录才能访问
  if (needAccess === accessEnum.USER) {
    // 如果用户没登录，那么表示无权限
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  // 如果需要管理员权限
  if (needAccess === accessEnum.ADMIN) {
    // 如果不为管理员，则表示错误
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
