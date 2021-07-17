import * as taskConstants from './../contants/task';
import { toastError, toastinfo } from '../helper/toastHelper';
const initialState = {
  listTask: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.ADD_TASK_SUCCESSED: {
      const { data } = action.payload;
      toastinfo('Thêm mới công việc thành công');
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
      };
    }
    case taskConstants.ON_DELETE: {
      return {
        ...state,
      };
    }
    case taskConstants.ON_DELETE_SUCCESSED: {
      const { id } = action.payload;
      toastinfo('Xóa thành công');
      return {
        ...state,
        listTask: state.listTask.filter((item) => item.id !== id),
      };
    }
    case taskConstants.ON_DELETE_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskConstants.TASK_EDITTING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditting: task,
      };
    }
    case taskConstants.UPDATE_TASK: {
      const { token } = action.payload;
      return {
        ...state,
      };
    }
    case taskConstants.UPDATE_TASK_SUCCESSED: {
      const { data } = action.payload;
      console.log('data', data);
      const { listTask } = state;
      const index = listTask.findIndex((item) => item._id === data._id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          data,
          ...listTask.slice(index + 1),
        ];
        toastinfo('Cập nhật công việc thành công');
        console.log('listTask', newList);
        return {
          ...state,
          listTask: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default:
      return state;
  }
};
export default reducer;
