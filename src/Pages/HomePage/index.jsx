import React, { useEffect } from "react"
import HomePage from "./HomePage"
import { selectExciteUsers, Fetch, FetchExciteUsers } from "../../store/States/ExciteUsers"
import ProfessionTypes from "../../Config/professionTypes"
import { connect } from "react-redux"

const Loader = ({ exciteUsers, fetchExciteUsers }) => {
  useEffect(() => {
    fetchExciteUsers()
  }, [fetchExciteUsers])

  return (
    <HomePage
      exciteUsers={exciteUsers}
      musicians={exciteUsers.filter(exciteUser => String(exciteUser.profession) === ProfessionTypes.MUSICIAN)}
      actors={exciteUsers.filter(exciteUser => String(exciteUser.profession) === ProfessionTypes.ACTOR)}
    />
  )
}

const mapStateToProps = state => ({
  exciteUsers: selectExciteUsers(state)
})

const mapDispatchToProps = dispatch => ({
  fetchExciteUsers: () => dispatch(Fetch(FetchExciteUsers()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)