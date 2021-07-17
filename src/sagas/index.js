import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  select,
  all,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskFailed,
  addTaskSuccessed,
  fetchlistTask,
  fetchlistTaskFailed,
  fetchlistTaskSuccess,
  updateTaskSuccessed,
  OnDeleteSuccess,
  OnDeleteFailed,
} from '../actions/task';
import {
  Login,
  LoginSuccess,
  LoginFailed,
  RegisterAction,
  RegisterActionSuccess,
  RegisterActionFail,
  checkUserLogin,
  UserWasLogin,
  // UserWasLogout,
} from '../actions/user';
import { hideLoading, showLoading } from './../actions/ui';
import {
  addTaskAPI,
  getList,
  UpdateTaskAPI,
  DeleteTaskApi,
  RegisterApi,
  LoginTokenApi,
  FetchList,
  CheckLogin,
} from './../apis/task';
import {
  // AdminPathRedirectDashboard,
  AdminPathRedirectTaskBoard,
  UserPathRedirectLogin,
  UserPathRedirectRegister,
} from '../actions/path';
import { STATUSUS, STATUS_CODE } from './../contants/index';
import * as taskTypes from './../contants/task';
import * as userTypes from './../contants/user';
import axios from './../commons/auth';
import history from '../history';

/**
 * B1: Thực thi Fetch Action
 * B2: Gọi API
 * B3: Kiểm tra Stt code
 * Nếu thành công ....
 * Nếu thất bại ....
 * B4: Tắt loading
 * B5: Thực thi công việc khác
 */
// Task Fetch API

function* watchFetchListTaskAction() {
  yield put(showLoading());
  const resp = yield call(FetchList);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(fetchlistTaskSuccess(data));
  } else {
    yield put(fetchlistTaskFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}
// Task filter
function* filterTaskSaga({ payload }) {
  yield delay(50);
  const { keyword } = payload;
  yield put(fetchlistTask({ q: keyword }));
}
// Add Task function
function* addTaskSaga({ payload }) {
  yield put(showLoading());
  const { title, description, token } = payload;
  const resp = yield call(addTaskAPI, {
    title,
    description,
    status: STATUSUS[0].value,
    token,
  });
  // yield resp;
  // console.log(resp);
  const { data, status } = resp;
  console.log(data);
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccessed(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(50);
  yield put(hideLoading());
}

// Delete Task function
function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(DeleteTaskApi, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(OnDeleteSuccess(id));
    yield put(hideModal());
  } else {
    yield put(OnDeleteFailed());
  }
  yield delay(50);
  yield put(hideLoading());
}

// Update Task Saga
function* updateTask({ payload }) {
  const { _id, title, description, status, token } = payload;
  const taskid = yield select((state) => state.task.taskEditting._id);
  yield put(showLoading());
  const resp = yield call(UpdateTaskAPI, {
    title,
    description,
    status,
    token,
    taskid,
  });
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.UPDATED) {
    console.log(data);
    yield put(updateTaskSuccessed(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(50);
  yield put(hideLoading());
}
// Đăng kí
function* RegisterSaga({ payload }) {
  const { name, password, email } = payload.data;
  const resp = yield call(RegisterApi, {
    name,
    password,
    email,
  });
  const { data, status: statusCode } = resp;
  console.log(data);
  if (statusCode === STATUS_CODE.SUCCESS) {
    console.log('Đăng kí thành công');
  } else {
    yield put(RegisterActionSuccess, data);
  }
}
// Đăng nhập
function* LoginSaga({ payload }) {
  const { email, password } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(LoginTokenApi, { email, password });
    const { data, status: statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      console.log(resp);
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', data.user);
      yield put(LoginSuccess(data));
    }
  } catch (error) {
    yield put({ type: 'LOGIN_FAILED', error });
  }
  // const resp = yield call(LoginTokenApi, { email, password });
  // const { data: usertoken, status: statusCode } = resp;
  // console.log(usertoken);
  // if (statusCode === STATUS_CODE.SUCCESS) {
  //   localStorage.setItem('jwt', usertoken);
  //   yield put(LoginSuccess(usertoken));
  // }
  yield delay(50);
  yield put(hideLoading());
}
// Check user was login
function* CheckUserLogin({ payload }) {
  const { data } = payload;
  // console.log(token);
  const resp = yield axios.post('/authenticate', null);
  console.log(resp);
  if (resp.status === STATUS_CODE.SUCCESS) {
    const token = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    yield put(UserWasLogin({ token, user }));
    // yield put(AdminPathRedirectDashboard());
  } else {
    localStorage.clear();
    // yield put(UserWasLogout());
    yield put(UserPathRedirectLogin());
  }
  yield delay(50);
  yield put(hideLoading());
}
// Function lắng nghe các action
function* rootSaga() {
  yield takeLatest(userTypes.USER_DEFAULT, CheckUserLogin);
  // yield takeLatest(CheckUserLogin);
  yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction);
  // yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTask);
  yield takeLatest(taskTypes.ON_DELETE, deleteTaskSaga);
  yield takeLatest(userTypes.SIGNUP, RegisterSaga);
  yield takeLatest(userTypes.LOGIN, LoginSaga);
}
export default rootSaga;
