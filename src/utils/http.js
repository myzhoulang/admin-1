import axios from 'axios';

const API_ENV = process.env.REACT_APP_SECRET_API;
const envUrl = require('../../package.json').envUrl;

// 这里的baseURL 只是在单个API域名或其他代理方式下使用
// 其他代理方式 可以在 pageake.json 中添加 proxy 属性 删除掉 envUrl
//
// 属性
// @example proxy 方式
// {proxy: 'https://api.fulik.com'...}
const baseURL = envUrl[API_ENV].API_URL;
// cors 单个API域名方式
let options = {
  baseURL,
  timeout: 80000, //  超时时间
  // withCredentials: true, //  发送跨域请求
  headers: {
    post: {'Content-Type': 'application/json'} // 设置请求
  }
};

// cors 多个API域名方式
// 多个API 域名 需要在每个api请求中手动加入前缀
// @example
//  axios.get(`${domin}/user`)....
//  axios.get(`${domin2}/products`)
//  ......
// let options = {
//   timeout: 80000, //  超时时间
//   // withCredentials: true, //  发送跨域请求
//   headers: {
//     post: {'Content-Type': 'application/json'} // 设置请求
//   }
// };

// 请求错误处理
let http = axios.create(options);

export default http
