import axios from 'axios';

const http = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
// 请求拦截器
http.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (err) => Promise.reject(err));
// 响应拦截器
http.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (err) => Promise.reject(err));

export default http;
