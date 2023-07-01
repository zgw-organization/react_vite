import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    // baseURL: process.env.VUE_APP_BASE_URL,
    baseURL: '',
    timeout: 5000,
  };
  constructor() {
    // 初始化示例
    this.instance = axios.create(Object.assign(this.baseConfig));
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // let token = getToken();
        // if (token) {
        //   config!.headers!["Authorization"] = token;
        // }
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        // 未授权，请重新登录(401)
        if (err.response && err.response.status === 401) {
          window.location.href = '/login';
        }
        return Promise.reject(err.response);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.delete(url, config);
  }
}

const http = new Request();
export default http;
