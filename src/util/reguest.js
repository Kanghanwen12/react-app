import axios from 'axios'
import store from '../redux/store'

// axios.defaults.baseURL = 'http://localhost:3000'
var request = axios.create({
  baseURL:'http://localhost:3000', // 基准地址
  timeout:5000
})



// 拦截请求
request.interceptors.request.use(function (config) {
  // token =
  // let token = localStorage.getItem('tonken')
  // if(token) {
  //   config.headers= {
  //     'x-auth-token': token
  //   }
  // }
  // Do something before request is sent
  store.dispatch({
    type: 'change_loading',
    payLoad: true,
  })
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 拦截响应
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  store.dispatch({
    type: 'change_loading',
    payLoad: false,
  })
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  store.dispatch({
    type: 'change_loading',
    payLoad: false,
  })
  return Promise.reject(error);
});


export default request