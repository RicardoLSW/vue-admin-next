import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 60000 // 请求超时时间
})

/**
 * axios 全局错误状态码处理
 * @param error
 */
const errorHandler = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 403:
        // 拒绝访问
        break
      case 500:
        // 服务器异常
        break
      case 404:
        // 很抱歉，资源未找到!
        break
      case 504:
        // 网络超时
        break
      case 401:
        // 未授权，请重新登录
        break
      default:
        break
    }
  }
  return Promise.reject(error)
}

/**
 * axios 配置全局请求参数
 */
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, errorHandler)

/**
 * axios 配置全局响应参数
 */
request.interceptors.response.use((response: AxiosResponse) => {
  if (response.config.responseType === 'blob') return response
  return response.data
}, errorHandler)

export default request
