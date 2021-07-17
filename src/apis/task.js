import qs from 'query-string';
import AxiosService from './../commons/axiosService';
import axios from './../commons/auth';
import { API_ENDPOINT, API_ENDPOINT_AUTH } from './../contants';
// http://localhost:3000/tasks
const defaulturl = 'tasks';
const auth = 'user/auth';
const register = 'user/register';
export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return AxiosService.get(`${API_ENDPOINT}/${url}${queryParams}`, token);
};
// export default fetchlistTask;
// https://localhost:3000/tasks : Method POST
export const addTaskAPI = (data) => {
  return AxiosService.post(`${API_ENDPOINT}/${defaulturl}/`, data);
};

// http://localhost:3000/tasks/:id : Method Delete
export const DeleteTaskApi = (id) => {
  return AxiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
};

// http://localhost:3000/tasks/:id :Method PUT
export const UpdateTaskAPI = (data, taskid) => {
  return AxiosService.post(
    `${API_ENDPOINT}/${defaulturl}/${data.taskid}`,
    data,
  );
};

export const CheckLogin = (token) => {
  return axios.post(`${API_ENDPOINT_AUTH}/authenticate`, token);
};

export const LoginTokenApi = (data) => {
  return AxiosService.post(`${API_ENDPOINT_AUTH}/signin`, data);
};

export const RegisterApi = (data) => {
  return AxiosService.post(`${API_ENDPOINT}/${register}`, data);
};

export const FetchList = () => {
  return AxiosService.get(`${API_ENDPOINT}/${defaulturl}`);
};
