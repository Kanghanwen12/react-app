import  request from './reguest'

export const LoginApi = (params) => {
  return request({
    url: `/users?username=${params.username}&password=${params.password}&roleState=true&_expand=role`, //请求路由
    method: "get", //请求方式
    // params: params, //传递数据
  });
};
export const ChildList = (params) => {  
  return request({
    url: `/rights?_embed=children`, //请求路由
    method: "get", //请求方式
    // params: params, //传递数据
  });
};

export const DeleteList = (params) => {
  return request({
    url: `/rights/${params.id}`, //请求路由
    method: "delete", //请求方式
    // params: params, //传递数据
  });
};

export const aditList = (params, data) => {
  
  return request({
    url: `/rights/${params}`, //请求路由
    method: "patch", //请求方式
    params:  data, //传递数据
  });
};

