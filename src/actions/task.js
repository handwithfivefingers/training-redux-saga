import * as taskConstants from './../contants/task'; // các action types
import { STATUSUS } from './../contants/index';
export const fetchlistTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};
export const fetchlistTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchlistTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

/**
 * B1: fetchlistTaskRequest()
 * B2: Reset: state stask => []
 * B3: fetchlistTaskSuccess(data response)
 */
// export const fetchlistTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchlistTask());
//     taskApis
//       .getList()
//       .then((resq) => {
//         const { data } = resq;
//         dispatch(fetchlistTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchlistTaskFailed(error));
//       });
//   };
// };
export const filterTask = (keyword) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};
export const filterTaskSuccess = (data) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addTask = (title, description, token) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
      token,
    },
  };
};
export const addTaskSuccessed = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESSED,
    payload: {
      data,
    },
  };
};
export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const updateTask = (
  title,
  description,
  status = STATUSUS[0].value,
  token,
) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
      token,
    },
  };
};
export const updateTaskSuccessed = (data) => {
  console.log(data);
  return {
    type: taskConstants.UPDATE_TASK_SUCCESSED,
    payload: {
      data,
    },
  };
};
export const updateTaskFailed = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const OnDeleteTask = (id) => {
  return {
    type: taskConstants.ON_DELETE,
    payload: {
      id,
    },
  };
};
export const OnDeleteSuccess = (id) => {
  return {
    type: taskConstants.ON_DELETE_SUCCESSED,
    payload: {
      id,
    },
  };
};
export const OnDeleteFailed = (error) => {
  return {
    type: taskConstants.ON_DELETE_FAILED,
    payload: {
      error,
    },
  };
};
export const TaskEditting = (task) => {
  return {
    type: taskConstants.TASK_EDITTING,
    payload: {
      task,
    },
  };
};
