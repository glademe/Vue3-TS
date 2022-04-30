import type { AxiosRequestConfig } from 'axios'
export interface HBRequestInterceptors {
  //请求拦截
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  //响应拦截
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface HBRequestConfig extends AxiosRequestConfig {
  interceptors?: HBRequestInterceptors
  showLoading?: boolean
}
