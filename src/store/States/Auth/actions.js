import Axios from "axios"
import endPoints from "../../../constants/endPoints"
import { LoginBody, SignUpBody, LoginTag, SignUpTag } from "./Queries"

export const LoginUser = ({ username, password }, callback = () => null) => {
  Axios.post(endPoints.baseURL, LoginBody({ username, password }))
    .then(res => {
      if (res.data.data[LoginTag].error) {
        callback(res.data.data[LoginTag].error, null)
      } else {
        callback(null, res.data.data[LoginTag])
      }
    })
    .catch(err => console.log("Error", err))
}

export const SignUpUser = ({ username, password }, callback = () => null) => {
  Axios.post(endPoints.baseURL, SignUpBody({ username, password }))
    .then(res => {
      if (res.data.data[SignUpTag].error) {
        callback(res.data.data[SignUpTag].error, null)
      } else {
        callback(null, res.data.data[SignUpTag])
      }
    })
    .catch(err => console.log("Error", err))
}
