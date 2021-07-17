import * as pathContants from './../contants/path';
import { toastError, toastinfo, toastwarning } from '../helper/toastHelper';
import { Satellite } from '@material-ui/icons';
const initialState = {
  path: '/',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pathContants.PATH_ADMIN_DASHBOARD: {
      return {
        ...state,
        path: '/',
      };
    }
    case pathContants.PATH_ADMIN_TASKBOARD: {
      return {
        ...state,
        path: '/task-board',
      };
    }
    case pathContants.PATH_USER_LOGIN: {
      return {
        ...state,
        path: '/login',
      };
    }
    case pathContants.PATH_USER_REGISTER: {
      return {
        ...state,
        path: '/register',
      };
    }
    default:
      return state;
  }
};
export default reducer;
