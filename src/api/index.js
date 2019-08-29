import request from '@/utils/request'

export function testindex() {
  return request({
    url: 'index',
    method: 'get'
  })
}
