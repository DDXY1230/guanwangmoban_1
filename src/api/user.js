import method from './api'
export const submitData = (params) => {
  return method.post("/userInfo/save", params)
}