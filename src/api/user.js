import method from './api'
export const submitData = (params) => {
  return method.get("user/login/getInfo", params)
}