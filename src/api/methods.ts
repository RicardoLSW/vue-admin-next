import { Method } from 'axios'
import request from '../utils/request'

// post
export function postAction(url: string, parameter: any) {
  return request({
    url,
    method: 'post',
    data: parameter
  })
}

// post method= {post | put}
export function httpAction(url: string, parameter: any, method: Method) {
  return request({
    url,
    method,
    data: parameter
  })
}

// put
export function putAction(url: string, parameter: any) {
  return request({
    url,
    method: 'put',
    data: parameter
  })
}

// get
export function getAction(url: string, parameter: any) {
  return request({
    url,
    method: 'get',
    params: parameter
  })
}

// deleteAction
export function deleteAction(url: string, parameter: any) {
  return request({
    url,
    method: 'delete',
    params: parameter
  })
}

// patchAction
export function patchAction(url: string, parameter: any) {
  return request({
    url,
    method: 'patch',
    data: parameter
  })
}

// exportAction
export function exportAction(url: string, parameter: any) {
  return request({
    url,
    method: 'get',
    params: parameter,
    responseType: 'blob'
  }).then((res) => {
    const { data } = res
    const blob = new Blob([data], { type: 'application/vnd.ms-excel;charset=utf-8' })
    const downloadElement = document.createElement('a')
    const href = window.URL.createObjectURL(blob) // 创建下载的链接
    downloadElement.href = href
    downloadElement.download = decodeURI(
      res.headers['content-disposition'].split(';')[1].split('=')[1]
    ) // 下载后文件名
    document.body.appendChild(downloadElement)
    downloadElement.click() // 点击下载
    document.body.removeChild(downloadElement) // 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放掉blob对象
  })
}
