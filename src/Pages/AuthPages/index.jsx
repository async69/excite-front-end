import React, { useState } from "react"
import AuthPage from "./AuthPage"
import { LoginUser, SignUpUser } from "../../store/States/Auth/actions"
import { connect } from "react-redux"
import { AuthUser, SetUserID, UpdateMainBuffer } from "../../store/States/Buffer/"
import routes from "../../Config/routes"
import { Redirect } from "react-router"

const Loader = ({ AuthUser, SetUserID, UpdateMainBuffer }) => {
  const [redirect, setRedirect] = useState("")
  const _loginUser = (username, password) => {
    LoginUser({ username, password }, (err, data) => {
      if (err) {
        return null
      } else {
        AuthUser()
        SetUserID(data._id)
        UpdateMainBuffer(data)
        setRedirect(routes.homePage)
      }
    })
  }

  const _signUpUser = (username, password) => {
    SignUpUser({ username, password }, (err, data) => {
      if (err) {
        return null
      } else {
        AuthUser()
        SetUserID(data._id)
        UpdateMainBuffer(data)
        setRedirect(routes.homePage)
      }
    })
  }
  return redirect.length > 0? <Redirect to={redirect} /> : (
    <AuthPage loginUser={_loginUser} signUpUser={_signUpUser} />
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
  AuthUser: () => dispatch(AuthUser()),
  SetUserID: (userID) => dispatch(SetUserID(userID)),
  UpdateMainBuffer: (payload) => dispatch(UpdateMainBuffer(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)