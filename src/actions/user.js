import * as userTypes from './../contants/user'; // các action types
import { STATUSUS } from './../contants/index';

export const RegisterAction = (data) => {
  return {
    type: userTypes.SIGNUP,
    payload: {
      data,
    },
  };
};
export const RegisterActionSuccess = (data) => {
  return {
    type: userTypes.SIGNUP_SUCCESS,
    payload: {
      data,
    },
  };
};
export const RegisterActionFail = (error) => {
  return {
    type: userTypes.SIGNUP_FAILED,
    payload: {
      error,
    },
  };
};
export const Login = (email, password) => {
  return {
    type: userTypes.LOGIN,
    payload: {
      email,
      password,
    },
  };
};
export const LoginSuccess = (user) => {
  return {
    type: userTypes.LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};
export const LoginFailed = (err) => {
  console.log(err);
  return {
    type: userTypes.LOGIN_FAILED,
    payload: {
      err,
    },
  };
};
export const checkUserLogin = () => {
  let token = localStorage.getItem('jwt');
  // let user = localStorage.getItem('user');
  return {
    type: userTypes.USER_DEFAULT,
    payload: {
      data: { token },
    },
  };
};

export const UserWasLogin = (data) => {
  return {
    type: userTypes.USER_WAS_LOG,
    payload: {
      data,
    },
  };
};
// export const UserWasLogout = (err) => {
//   return {
//     type: userTypes.USER_WAS_LOG_OUT,
//     payload: {
//       err,
//     },
//   };
// };
