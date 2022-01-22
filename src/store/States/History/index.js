import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const History = new StateArrayModel({ stateName: "histories" })

History.setInitialState()

History.setFetchBody("fetchHistories")
History.setAddBody("postCategory")
History.setEditBody("editCategory")
History.setDeleteBody("removeCategory")

History.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = History.getSelectors()

export const {
  stateName, reducer
} = History.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = History.getAPIHandles()

export { selectData as selectHistories }

export const FetchHistories = () => ({
  query: `query {
    fetchHistories {
      _id
      exciteID
      title
      image
      description
    }
  }`
})