import * as userContants from './../contants/user';
import { toastError, toastinfo, toastwarning } from '../helper/toastHelper';
import { Satellite } from '@material-ui/icons';
const initialState = {
  user: null,
  authenticate: false,
  authenticating: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userContants.SIGNUP: {
      const { name, email, password } = action.payload;
      return {
        ...state,
        name,
        email,
        password,
      };
    }
    case userContants.SIGNUP_SUCCESS: {
      toastinfo('Đăng kí thành công');
      return {
        ...state,
      };
    }
    case userContants.SIGNUP_FAILED: {
      const { error } = action.payload;
      toastwarning(error);
      return {
        ...state,
      };
    }
    case userContants.LOGIN: {
      return {
        ...state,
        authenticating: true,
      };
    }
    case userContants.LOGIN_SUCCESS: {
      toastinfo('Đăng nhập thành công');
      return {
        ...state,
        user: action.payload,
        authenticating: false,
        authenticate: true,
      };
    }
    case userContants.LOGIN_FAILED: {
      // const { err } = action.payload;
      toastinfo('Đăng nhập thất bại, vui lòng đăng nhập lại');
      return {
        ...state,
        authenticating: false,
      };
    }
    case userContants.USER_DEFAULT: {
      return {
        ...state,
      };
    }
    case userContants.USER_WAS_LOG: {
      const { data } = action.payload;
      return {
        ...state,
        user: data,
        authenticate: true,
      };
    }
    case userContants.USER_WAS_LOG_OUT: {
      toastinfo('Vui lòng đăng nhập lại');
      return {
        ...state,
        usertoken: null,
      };
    }
    default:
      return state;
  }
};
export default reducer;
