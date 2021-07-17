import axios from 'axios';
import configureStore from './../redux/configureStore';
const token = window.localStorage.getItem('jwt');
console.log(token);
const axioInstance = axios.create({
  baseURL: 'http://localhost:2000/api',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});
// axioInstance.interceptors.request.use((req) => {
//   const { auth } = configureStore.getState();
//   if (auth.token) {
//     req.headers.Authorization = `Bears ${auth.token}`;
//   }
//   return req;
// });
// axioInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     // status 500 ...
//     const status = error.response ? error.response.status : 500;
//     if (status === 500) {
//       localStorage.clear();
//       store.dispatch({
//         type: authConstants.LOGOUT_SUCCESS,
//       });
//     }
//     return Promise.reject(error);
//   },
// );

export default axioInstance;
