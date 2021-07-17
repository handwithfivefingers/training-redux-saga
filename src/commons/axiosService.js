import axios from 'axios';
class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    this.instance = instance;
  }
  handleSuccess(response) {
    // console.log('handleSuccess', response);
    return response;
  }

  handleError(error) {
    console.log('handle error', error);
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body, token) {
    return this.instance.post(url, body, {
      headers: {
        Authorization: `Bear ${token}`,
      },
    });
  }
  delete(url) {
    return this.instance.delete(url);
  }
  put(url, body) {
    return this.instance.put(url, body);
  }
}

export default new AxiosService();
