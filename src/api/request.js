import axios from "axios";
const contentType = "application/json;charset=UTF-8"
const service = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: {
    'Content-Type': contentType
  }
})

service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  const token = getCookie('token')
  if(token) {
    config.headers.Authorization = token
  }
  config.headers.useName = getUserName()

  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(response => {
  const {data, config} = response
  if(data.code !== 200) {
    //  处理接口错误
    console.log(config)
  } else {
    return data
  }

},err => {
  return Promise.reject(err)
})

export default service