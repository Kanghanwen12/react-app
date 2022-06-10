import  request from './reguest'

export const LoginApi = (username, password) => {
  return request({
    url: `/users?username=${username}&password=${password}&roleState=true&_expand=role`, //请求路由
    method: "get", //请求方式
    // params: params, //传递数据
  });
};