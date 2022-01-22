import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { isAuthenticated } from "../../store/States/Buffer/"
import { Fetch as _FetchReviews, FetchReviews } from "../../store/States/Review"
import { Fetch as _FetchHistories, FetchHistories } from "../../store/States/History"
import routes from "../../Config/routes"

const Autoload = () => dispatch => {
  dispatch(_FetchReviews(FetchReviews()))
  dispatch(_FetchHistories(FetchHistories()))
}

const Loader = ({ isAuthenticated, autoload }) => {
  const [redirect, setRedirect] = useState("")
  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect(routes.login)
    } else {
      setRedirect("")
    }
  }, [isAuthenticated, setRedirect])

  useEffect(() => {
    autoload()
  }, [autoload])

  return redirect.length > 0? <Redirect to={redirect} /> : <></>
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  autoload: () => dispatch(Autoload())
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)