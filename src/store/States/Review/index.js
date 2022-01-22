import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Review = new StateArrayModel({ stateName: "reviews" })

Review.setInitialState()

Review.setFetchBody("fetchReviews")
Review.setAddBody("postCategory")
Review.setEditBody("editCategory")
Review.setDeleteBody("removeCategory")

Review.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Review.getSelectors()

export const {
  stateName, reducer
} = Review.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = Review.getAPIHandles()

export { selectData as selectReviews }

export const FetchReviews = () => ({
  query: `query {
    fetchReviews {
      _id
      userID
      content
      comments
    }
  }`,
})