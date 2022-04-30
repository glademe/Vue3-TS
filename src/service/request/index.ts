import axios from 'axios'
import { ElLoading } from 'element-plus/lib/components/loading/index'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import type { AxiosInstance } from 'axios'
import type { HBRequestInterceptors, HBRequestConfig } from './type'

const DEFAULT_LOADING = true

class HBRequest {
  instance: AxiosInstance
  interceptors?: HBRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  //从config取出的拦截器是对应的实例的拦截器
  constructor(config: HBRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)
    //是否显示loading
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    //拦截器配置
    this.interceptors = config.interceptors
    //请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        //移除正在加载
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '500') {
          console.log('请求错误')
        }
        return res.data
      },
      (error) => {
        if (error.response.status === 404) {
          console.log('404的错误')
        }
        return error
      }
    )
  }

  //封装请求
  request<T>(config: HBRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          this.showLoading = DEFAULT_LOADING

          //将结果返回
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  //get请求
  get<T>(config: HBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  //POST请求
  post<T>(config: HBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  //DELETE请求
  delete<T>(config: HBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default HBRequest
