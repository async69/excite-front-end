export const SignUpBody = ({ username, password }) => ({
  query: `mutation {
    signUp(input: { username: "${username}", password: "${password}" }) {
      _id
      username
      password
      exciteUserID
      error {
        type
        message
      }
    }
  }
  `
})

export const SignUpTag = "signUp"

export const LoginBody = ({ username, password }) => ({
  query: `mutation {
    login(input: {
      username: "${username}",
      password: "${password}"
    }) {
      _id
      username
      password
      exciteUserID
      error {
        type
        message
      }
    }
  }`
})

export const LoginTag = "login"