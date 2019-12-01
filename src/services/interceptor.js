import axios from 'axios';

class request {

  static post(route, bodyParams = {}) {
    const url = `${route}`;
    const request = axios.post(url, bodyParams);
    return request;
  }

  static get(route, bodyParams = {}) {
    let url = `${route}`;
    const request = axios.get(url, {params:bodyParams});
    return request;
  }

}
export default request;
