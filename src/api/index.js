import request from './request'

export function getList(params) {
  return request({
    url: 'api/get',
    method: 'GET',
    params
  })
}