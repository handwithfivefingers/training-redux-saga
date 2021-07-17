import * as pathTypes from './../contants/path';
/**
 * Nơi Khai Báo các Actions type ( loại Action )
 * showModal -> Nếu loại Action là SHOW_LOADING ( contants) -> Qua Reducers
 * hideModal -> Nếu loại Action là HIDE_LOADING ( contants) -> Qua Reducers
 */
// export const AdminPathRedirectDashboard = () => ({
//   type: pathTypes.PATH_ADMIN_DASHBOARD,
// });
export const AdminPathRedirectTaskBoard = () => ({
  type: pathTypes.PATH_ADMIN_TASKBOARD,
});

export const UserPathRedirectLogin = () => ({
  type: pathTypes.PATH_USER_LOGIN,
});
export const UserPathRedirectRegister = () => ({
  type: pathTypes.PATH_USER_REGISTER,
});
