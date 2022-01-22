import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const ExciteUser = new StateArrayModel({ stateName: "excite_users" })

ExciteUser.setInitialState()

ExciteUser.setFetchBody("fetchExciteUsers")
ExciteUser.setAddBody("postCategory")
ExciteUser.setEditBody("editCategory")
ExciteUser.setDeleteBody("removeCategory")

ExciteUser.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = ExciteUser.getSelectors()

export const {
  stateName, reducer
} = ExciteUser.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = ExciteUser.getAPIHandles()

export { selectData as selectExciteUsers }

export const FetchExciteUsers = () => ({
  query: `query {
    fetchExciteUsers {
      _id
      firstName
      middleName
      lastName
      email
      profession
      rating
      profilePicture
      histories
      reviews
      pictures
      phoneNumber
      description
      minPriceForEvent
      isOpenToWork
      isVerified
      address {
        country
        region
        city
      }
    }
  }`,
})

export const AddCategory = (name) => ({
  query: `mutation ($name: String!) {
    postCategory(CategoryInput: {
      name: $name
    }) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    name
  }
})

export const EditCategory = (id, name) => ({
  query: `mutation ($id: String!, $name: String!) {
    editCategory(CategoryEdit: {
      _id: $id,
      name: $name
    }) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id, name
  }
})

export const RemoveCategory = (id) => ({
  query: `mutation ($id: String!) {
    removeCategory(_id: $id) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})